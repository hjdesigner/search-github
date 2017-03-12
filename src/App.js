import React, { Component } from 'react';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import './css/bootstrap.css';
import './css/main.css';
import './fonts/glyphicons-halflings-regular.eot';
import './fonts/glyphicons-halflings-regular.svg';
import './fonts/glyphicons-halflings-regular.ttf';
import './fonts/glyphicons-halflings-regular.woff';
import './fonts/glyphicons-halflings-regular.woff2';
import Header from './components/Header';
import InputCustom from './components/InputCustom';
import ButtonCustom from './components/ButtonCustom';
import TratadorErros from './components/TratadorErros';



class App extends Component {
  constructor(){
    super();
    this.state = {usuario : [],repositories : [], nome:'', msgErro:''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
  }

  enviaForm(evento){
    evento.preventDefault();
    let urlUser = 'https://api.github.com/users/' + this.state.nome+'?client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510';
    let urlRepo = 'https://api.github.com/users/' + this.state.nome+'/repos?client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510';
    $.ajax({
      url: urlUser,
      dataType: 'json',
      success:function(resposta){
        this.setState({usuario:[resposta]});
        this.setState({nome: ''});
      }.bind(this),
      complete:function(resposta){
        $('[data-js="box-preload"]').removeClass('ativo');
      },
      error:function(resposta){
        if(resposta.status === 404){
          new TratadorErros().publicaErros(resposta.responseJSON);
        }
      },
      beforeSend: function(){
        PubSub.publish("limpa-erros",{});
      }
    })
    .always(function(){
      $('[data-js="box-preload"]').addClass('ativo');
    });
    $.ajax({
      url: urlRepo,
      dataType: 'json',
      success:function(resposta){
        this.setState({repositories:resposta});
      }.bind(this),
      complete:function(resposta){
        $('[data-js="box-preload"]').removeClass('ativo');
      }
    })
    .always(function(){
      $('[data-js="box-preload"]').addClass('ativo');
    });
  }
  setNome(evento){
    this.setState({nome:evento.target.value});
  }

  componentDidMount(){
    PubSub.subscribe("erro-validacao",function(topico,erro){
      this.setState({msgErro:erro.message});
    }.bind(this));
    PubSub.subscribe("limpa-erros",function(topico){
      this.setState({msgErro:''});
    }.bind(this));
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <header className="col-lg-12">
              <Header />
            </header>

            <div className="main col-lg-12">

              <section className="form col-lg-12">
                <h1>Pesquise um usuário do Github</h1>
                <form onSubmit={this.enviaForm} method="post">
                  <div className="Form-group">
                    <div className="input-group">
                      <InputCustom id="nome" type="text" name="nome" className="form-control col-lg-12 input-lg" placeholder="Digite o usuário do github" value={this.state.nome} onChange={this.setNome} />
                      <ButtonCustom type="submit" className="btn btn-default btn-lg" label="Buscar"/>
                    </div>
                  </div>
                </form>
                <div className="error">
                  <p>{this.state.msgErro}</p>
                </div>
              </section>

              <section className="box-preload" data-js="box-preload">
                <div className="preloaders-3">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </section>

              <aside className="col-lg-3 col-xs-12 col-sm-12 col-md-3">
                {
                  this.state.usuario.map(function(dados){
                    return (
                      <div className="usuario" key={dados.id}>
                        <figure className="image-avatar">
                          <img src={dados.avatar_url} className="img-reponsive" alt="Avatar" />
                        </figure>
                        <h2> {dados.name} </h2>
                        <p>{dados.email}</p>
                        <p>Followers: {dados.followers}</p>
                        <p>Following: {dados.following}</p>
                        <p>
                          {dados.bio}
                        </p>
                      </div>
                    );
                  })
                }


              </aside>

                <div className="col-lg-9 col-xs-12 col-sm-12 col-md-9">
                  {
                    this.state.repositories.map(function(resp){
                      return(
                        <section className="repositories" key={resp.id}>
                          <h3>{resp.name}</h3>
                          <p>{resp.description}</p>
                          <a href={resp.html_url} target="_blank" className="btn btn-primary">Acessar Repositorio</a>
                        </section>
                      );
                    })
                  }



                </div>
            </div>

          </div>
        </div>
    );
  }
}

export default App;
