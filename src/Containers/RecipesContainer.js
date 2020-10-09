import React from 'react';
import RecipeCardsContainer from '../Components/RecipeCardsContainer';
import { connect } from 'react-redux'
import fetchRecipes from '../Actions/RecipeActions'
import { Route, Switch } from 'react-router-dom';
import CreateRecipeContainer from './CreateRecipeContainer.js';
import RecipeShowContainer from './RecipeShowContainer.js';

class RecipesContainer extends React.Component{
     constructor() {
         super()
         this.state = {
           filter: '',
         }
        };

    componentDidMount() {
        this.props.fetchRecipes()
    }

    orderRecipes = () => {
        if ( this.state.filter === 'az') { 
           return this.props.recipes.sort((a,b)=> (a.attributes.title > b.attributes.title ? 1 : -1))
        }
        else if (this.state.filter === 'za') {
            return this.props.recipes.sort((a,b) => (b.attributes.title > a.attributes.title) ? 1 : -1)
        }
        else {
            return this.props.recipes
        }
    }

    alphabetize = (order) => {
        this.setState({
            filter: order
        })
    }

    render() {
        if (this.props.isLoading) {
            return <h1>Loading</h1>
        }
        return (
            <div className="RecipeDisplay">
                <Switch>
                    <Route exact path='/recipes' >
                        <RecipeCardsContainer
                            recipes={this.orderRecipes()}
                            alphabetize={this.alphabetize}/>
                    </Route>
                    <Route exact path='/recipes/new' component={CreateRecipeContainer} />
                    <Route exact path='/recipes/:id' component={({ match }) => {
                        return (
                            < RecipeShowContainer
                                id={match.params.id}
                                recipe={ this.props.recipes.find((recipe) => recipe.id === match.params.id)}
                            />
                        )
                    }}/>        
                </Switch>           
            </div>
        )
    }
}

const grabInfoFromStore = (stateFromStore) => {
    return stateFromStore
}

export default connect(grabInfoFromStore,{fetchRecipes})(RecipesContainer);