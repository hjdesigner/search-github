import React, { Component } from 'react';
import $ from 'jquery';
import './css/bootstrap.css';
import './css/main.css';
import './fonts/glyphicons-halflings-regular.eot';
import './fonts/glyphicons-halflings-regular.svg';
import './fonts/glyphicons-halflings-regular.ttf';
import './fonts/glyphicons-halflings-regular.woff';
import './fonts/glyphicons-halflings-regular.woff2';
import logo from './images/logo.jpg';

class App extends Component {
  constructor(){
    super();
    this.state = {usuario : [],repositories : [], nome:''};
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
      }.bind(this)
    });
    $.ajax({
      url: urlRepo,
      dataType: 'json',
      success:function(resposta){
        this.setState({repositories:resposta});
      }.bind(this)
    });
  }
  setNome(evento){
    this.setState({nome:evento.target.value});
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <header className="col-lg-12">
              <div className="github col-lg-4 center-block">
                <img src={logo} className="App-logo" alt="Github + React" />
              </div>
            </header>

            <div className="main col-lg-12">

              <section className="form col-lg-12">
                <h1>Pesquise um usuário do Github</h1>
                <form onSubmit={this.enviaForm} method="post">
                  <div className="Form-group">
                    <div className="input-group">
                      <label htmlFor="nome"></label>
                      <input id="nome" type="text" name="nome" className="form-control col-lg-12 input-lg" placeholder="Digite o usuário do github" value={this.state.nome} onChange={this.setNome} required />
                      <span className="input-group-btn">
                        <button type="submit" className="btn btn-default btn-lg">Buscar</button>
                      </span>
                    </div>
                  </div>
                </form>
              </section>

              <aside className="col-lg-3">
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
                        <p>Respositories: {dados.public_repos}</p>
                        <p>
                          {dados.bio}
                        </p>
                      </div>
                    );
                  })
                }


              </aside>

                <div className="col-lg-9">
                  {
                    this.state.repositories.map(function(resp){
                      return(
                        <section className="repositories" key={resp.id}>
                          <h3>{resp.name}</h3>
                          <p>{resp.description}</p>
                          <button type="button" className="btn btn-primary btn-block" data-name={resp.full_name}>Mais Detalhes</button>
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
