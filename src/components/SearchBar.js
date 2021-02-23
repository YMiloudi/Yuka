import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            inputSearch : "" // Initialisation du state
        }

    }

    
    handleChange = (event) => {
        this.setState({inputSearch: event.target.value}); // Récupère la valeur de l'input 
    }
   
    handleSearch = () =>{
        this.props.onSearch(this.state.inputSearch) // Soulève un évènement ET on lui passe une variable
    }
    
  
    render(){
        return(
            <>
                <input onChange={this.handleChange} 
                type="text" 
                placeholder="Recherche" 
                value={this.state.inputSearch} 
                /> 
                <button onClick={this.handleSearch}>Chercher</button>
            </>
        )
    }
}

export default SearchBar;