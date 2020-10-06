const baseURL = "http://localhost:3001/recipes"

export default function fetchRecipes() {
    return (dispatch) => {
        dispatch({type:'FETCHING_RECIPES'})
       fetch(baseURL)
       .then(res => res.json())
       .then(recipes => {
           console.log(recipes)
           dispatch({type:'FETCH_RECIPES', payload: recipes})
       }) 
    }
}

export default function addRecipes() {
    return (dispatch => {
        
    })
}