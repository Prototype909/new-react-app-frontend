import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class RecipeShowContainer extends React.Component{                           
    render() {
        return (
            <div>
                <h1>{this.props.recipe.attributes.title}</h1>
                <img src={this.props.recipe.attributes.image_link} ></img>
                <p>{this.props.recipe.attributes.text}</p>
                
                <Link to="/recipes">Back</Link> 
            </div>            
        )
    }
}

const grabInfoFromStore = (stateFromStore) => {
    return stateFromStore
}

export default connect(grabInfoFromStore)(RecipeShowContainer);