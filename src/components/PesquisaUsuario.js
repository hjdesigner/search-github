import React, { Component } from 'react';

export default class PesquisaUsuario extends Component{


  render(){
    return(
      <section className="form col-lg-12">
        <h1>Pesquise um usuário do Github</h1>
        <form>
          <div className="Form-group">
            <div className="input-group">
              <label htmlFor="usuario"></label>
              <input id="usuario" type="text" name="usuario" className="form-control col-lg-12 input-lg" placeholder="Digite o usuário do github" value="" />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-default btn-lg">Buscar</button>
              </span>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
