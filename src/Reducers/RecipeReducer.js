export default function RecipeReducer(state = {recipes: [], isLoading: true}, action) {
    switch (action.type) {
        case 'FETCH_RECIPES':
            return {...state, recipes: action.payload, isLoading: false}
        case 'FETCHING_RECIPES':
            return {...state, isLoading: true}
        default:
            return state
    }
}
