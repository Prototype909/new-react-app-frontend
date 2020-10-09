import React from 'react';
import { Link } from "react-router-dom";
import HomeLink from './HomeLink';

const RecipeShowContainer = (props) => {
    return (
        <div><br/><br/>
            <h1>{props.recipe.attributes.title}</h1>
            <img className="showImage" src={props.recipe.attributes.image_link} alt={props.recipe.attributes.image_link}></img>
            <p>{props.recipe.attributes.text}</p>
            
            <Link to="/recipes">Back</Link>
            <HomeLink /> 
        </div>            
    )
}


export default RecipeShowContainer;