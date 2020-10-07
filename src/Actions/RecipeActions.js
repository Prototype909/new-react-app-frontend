const baseURL = "http://localhost:3001/recipes"

export default function fetchRecipes() {
    return (dispatch) => {
        dispatch({type:'FETCHING_RECIPES'})
       fetch(baseURL)
       .then(res => res.json())
       .then(json => {
           const recipes = json.data
           dispatch({type:'FETCH_RECIPES', payload: recipes})
       }) 
    }
}

    export function addRecipes(recipe){
        const createRecipesConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/jason'
            },
            body: JSON.stringify({recipe: recipe})
        }

        return (dispatch) => {
            fetch(baseURL, createRecipesConfig)
            .then(res => res.json())
            .then(recipe => {
                dispatch({type: 'ADD_RECIPES', payload: recipe})
            })
        }
    }
// export const addRecipes = (recipes) => {
//         const createRecipeConfig = {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(recipes)
//         };
//     return (dispatch) => {
//         fetch(baseURL, createRecipeConfig)
//         .then(res => res.json())
//         .then(recipes => {
//             console.log(recipes)
//             dispatch({type:'ADD_RECIPES', payload: recipes})
//         })
//     };
// }