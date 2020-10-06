import React from 'react';
import RecipeCard from './RecipeCard.js'
import { Link } from "react-router-dom";
import HomeLink from './HomeLink'

const RecipeCardsContainer = (props) => {
    console.log(props)
    // debugger
    let recipes = props.recipes.map(recipe => {
        return(
            <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.attributes.title}
                text={recipe.attributes.text}
                image_link={recipe.attributes.image_link}
            />
        )
    })
    return (
        <div className="RecipeCardsContainer">
            {recipes}<br></br>
            <Link to="/createrecipe">Create a Recipe</Link><br></br>
            <HomeLink />
        </div>
    )
}

export default RecipeCardsContainer;