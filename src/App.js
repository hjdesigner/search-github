import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/main.css';
import './fonts/glyphicons-halflings-regular.eot';
import './fonts/glyphicons-halflings-regular.svg';
import './fonts/glyphicons-halflings-regular.ttf';
import './fonts/glyphicons-halflings-regular.woff';
import './fonts/glyphicons-halflings-regular.woff2';
import Header from './components/Header';
import PesquisaUsuario from './components/PesquisaUsuario';

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <Header />
            <div className="main col-lg-12">
              <PesquisaUsuario />
            </div>

          </div>
        </div>
    );
  }
}

export default App;
