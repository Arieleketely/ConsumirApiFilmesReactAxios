import logo from './logo.svg';
import './App.css';
import api from './Componentes/api';
import React, { Component } from 'react';

class App extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars')
 
    this.setState({ filmes: response.data });
  }



  render(){
    const {filmes}=this.state;
  return (
    <div className="App">
      
      {console.log(filmes)}
      {filmes.map(filme => (
        <li key={filme.show.id}>
          <h2>
            <strong>
              Título:
              </strong>
              </h2>
              {filme.show.name}
              {filme.show.url}
         
            
     

        </li>
      ))}

      
      
      
      
      
      
      
      
     
    </div>
  );
}
}
export default App;




