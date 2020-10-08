import React from 'react';
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    console.log(props);
    //   debugger
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
                // state: {
                //     title: props.title,
                //     text: props.text,
                //     image_link: props.image_link
                // }
            }}>{props.title}</Link>
        </div>
    )
}}

export default RecipeCard;