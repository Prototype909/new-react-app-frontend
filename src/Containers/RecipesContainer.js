import React from 'react';
import RecipeCardsContainer from '../Components/RecipeCardsContainer';
import AtoZ from '../Components/AtoZ'
import ZtoA from '../Components/ZtoA'
import { connect } from 'react-redux'
import fetchRecipes from '../Actions/RecipeActions'
 

class RecipesContainer extends React.Component{
    // constructor() {
    //     super()
    //     this.state = {
    //       isLoaded: false,
    //       recipes: [],
    //       displayRecipes: []
    //     }
    //     this.alphabetize = this.alphabetize.bind(this);
    // }

    componentDidMount() {
        this.props.fetchRecipes()
    //     fetch("http://localhost:3001/recipes")
    //     .then(res => res.json())
    //     .then((result) => {
    //         console.log(result.data)
    //             this.setState({
    //                 isLoaded: true,
    //                 recipes: result.data,
    //                 displayRecipes: result.data
    //             });
    //         })
    }

    alphabetize = (order) => {
        if (order === 'az') {
            this.setState({
                displayRecipes: this.props.recipes.data.sort((a, b) => (a.title > b.title) ? 1 : -1)
            })
        }
        if (order === 'za') {
            this.setState({
                displayRecipes: this.props.recipes.data.sort((a, b) => (a.title < b.title) ? 1 : -1)
            })
        }

    }

    render() {
        // debugger
        if (this.props.isLoading) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                <h1>Recipes:</h1>
                <div class="sorting">
                    <button onClick={() => this.alphabetize('az')}><AtoZ /></button>
                    <button onClick={() =>this.alphabetize('za')}><ZtoA /></button>
                </div>
                <RecipeCardsContainer
                    recipes={this.props.recipes}
                />
            </div>
        )
    }
}


export default connect(state => state,{fetchRecipes})(RecipesContainer);