import React from 'react';
import RecipeCard from './RecipeCard.js'
import { Link } from "react-router-dom";
import HomeLink from './HomeLink'
import AtoZ from '../Components/AtoZ'
import ZtoA from '../Components/ZtoA'
// import { orderRecipes } from '../Containers/RecipesContainer'



const RecipeCardsContainer = (props) => {
    console.log(props)
    //  debugger
    if (!props.recipes) {
        return <div>Loading...</div>
    }

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
            <h1>Recipes:</h1>
                <div class="sorting">
                    <button onClick={() => props.orderRecipes('az')}><AtoZ /></button>
                    <button onClick={() => props.alphabetize('za')}><ZtoA /></button>
                </div>
            {recipes}<br></br>
            
            
        </div>
    )
}

export default RecipeCardsContainer;