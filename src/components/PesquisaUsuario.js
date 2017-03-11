import React, { Component } from 'react';
import $ from 'jquery';

export default class PesquisaUsuario extends Component{
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

  render(){
    return(
      <div>
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
      </div>
    );
  }
}
