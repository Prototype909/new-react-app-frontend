import React from 'react';
import RecipeCard from './RecipeCard.js'
import AtoZ from '../Components/AtoZ'
import ZtoA from '../Components/ZtoA'

const RecipeCardsContainer = (props) => {
        if (!props.recipes) {
        return <div>Loading...</div>
    }

    let recipes = props.recipes.map(recipe => {
        return(
            <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.attributes.title || recipe.data.attributes.title}
                text={recipe.attributes.text || recipe.data.attributes.text}
                image_link={recipe.attributes.image_link || recipe.data.attributes.image_link}
            />
        )
    })

 
    return (
        <div className="RecipeCardsContainer">
            <h1>Recipes:</h1>
                <div className="sorting">
                    <button onClick={() => props.alphabetize('az')}><AtoZ /></button>
                    <button onClick={() => props.alphabetize('za')}><ZtoA /></button>
                </div>
            {recipes}<br></br>
            
            
        </div>
    )
}

export default RecipeCardsContainer;