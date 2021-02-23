import React, { Component } from "react";
import SearchBar from '../components/SearchBar';
import '../pages/Accueil.css';
import {Link} from 'react-router-dom'; 

import Lottie from 'react-lottie';
import animationData from '../searchFood.json'// Import du fichier d'animation 

class Accueil extends Component{
 
    constructor(props){
        super(props);

        this.state = {
            product: [],
        }
    }
 

    searchProduct = (prod) => {
        //Structure d'une URL (API REST) :
        //NomDuSite.com/....?param1=valeur1&param2=valeur2&param3=valeur3
        fetch("https://world.openfoodfacts.org/cgi/search.pl?search_terms=" + prod + "&search_simple=1&action=process&json=1")
        .then((resp) => resp.json())
        .then((data) => this.getProduct(data))
    }
    
    getProduct = (data) => {
       this.setState({product : data.products});
    }
    


    render(){

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
            },
        }



        return(
            <>
                <h1>Yuka Clone</h1>

                <div className="searchBar">
                    <SearchBar onSearch={(prod)=>this.searchProduct(prod)}/> 
                </div>

               <Lottie 
                  options={defaultOptions}
                  height={500}
                  width={500}
                  />                    

                     {

                         this.state.product.map((product =>

                         <div className="productContainer">
                            <Link to={"/Produits/" + product.id}>
                                <h2>{product.generic_name_fr}</h2>
                                <img src = {product.image_front_thumb_url}/>
                            </Link>
                         </div> 
                         ))
                
                     }
                    
            </>
        )
    }
}

export default Accueil;
