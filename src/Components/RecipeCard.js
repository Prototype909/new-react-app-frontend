import React from 'react';
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    if (!!props.recipe) {
        return ( 
            <div>{props.recipe.attributes.title}<br/>
                {props.recipe.attributes.text}<br/>
                <div><img src={props.recipe.attributes.image_url}/></div>
            </div>)
    }
    else {
        return(
            <div>
                <Link to={{
                    pathname: '/recipes/' + props.id,
                }}>{props.title}</Link>
            </div>
    )
}}

export default RecipeCard;