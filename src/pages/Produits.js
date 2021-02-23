import React, { Component } from 'react';
import '../pages/Produits.css';

class Produits extends Component{

    constructor(props){
        super(props);

        this.state = {
            product: []
        }
    }


    componentDidMount(){
        fetch("https://world.openfoodfacts.org/api/v0/product/" + this.props.match.params.id + ".json") // Récupération de la valeur de l'id qu'on affiche grace ai fetch
        .then((resp)=>resp.json())
        .then((data) => this.getData(data))
       
    }

    getData = (data) => {
        this.setState({product : data.product})
     }



    render(){
        return(

        <div>
                <h2>{this.state.product.generic_name_fr}</h2>
                <img src={this.state.product.image_front_url}/>
    
            

                <div className="tableIngredients">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Ingrédients</th>
                                    <th scope="col">Pourcentage</th>
                                </tr>
                            </thead>

                            <tbody classeName="Ingredients">
                                
                               {
                                   this.state.product.length != 0 && // Condition : Lorsque la longeur du tableau est différent de 0, on affiche les résultats

                                   this.state.product.ingredients.map((ingredient) => //Dans product, on va return les ingredients de l'API. Et ensuite lui assigner une var? ingredient
                                    <tr>
                                        <td>{ingredient.text.replaceAll("_","").toUpperCase()}</td>
                                        <td>{Math.round(ingredient.percent_estimate)}%</td>
                                    </tr>
                                   )
                               }

                            
                            </tbody>
                        </table>
                        </div>
        
                   
    
        </div>
    
        )
    }
}

export default Produits;