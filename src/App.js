import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'; 
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Footer from './components/footer/Footer';

class App extends Component{

  render(){
    return(
      
      <>
      <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/Produits/:id" component={Produits}/> {
            //id = variable id qu'on récup dans le composant produit 
          }
      </Switch>

      <Footer/>

      </>
    
    )
  }
}

export default App; 
