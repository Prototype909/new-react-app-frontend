import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { addRecipes } from '../Actions/RecipeActions'
import HomeLink from '../Components/HomeLink'

class CreateRecipeContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            image_link: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleImageLinkChange = this.handleImageLinkChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange = event => {
        console.log(this.state);
        this.setState({
          title: event.target.value,
        });
    };

    handleTextChange = event => {
        console.log(this.state);
        this.setState({
          text: event.target.value,
        });
    };

    handleImageLinkChange = event => {
        console.log(this.state);
        this.setState({
          image_link: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const recipe = {
            title: this.state.title,
            text: this.state.text,
            image_link: this.state.image_link
        }  
        this.props.addRecipes(recipe)
        this.setState({
            title: "",
            text: "",
            image_link: "",
        })        
        this.props.history.push('/recipes');
    };

    render() {
        return (
            <div><br/><br/>
                <h1>Create a Recipe:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                    <input type="text" value={this.state.value} onChange={this.handleTitleChange} />
                    </label><br></br>
                    <label>
                        Text:
                    <input type="text" value={this.state.value} onChange={this.handleTextChange} />
                    </label><br></br>
                    <label>
                        Image Link:
                    <input type="text" value={this.state.value} onChange={this.handleImageLinkChange} />
                    </label><br></br>
                    <input type="submit" value="Submit" /><br/>
                    
                    <Link to="/recipes">Back</Link> 
                    <HomeLink />

                </form>
            </div>
        )
    }
}

export default connect(null, { addRecipes })(CreateRecipeContainer);