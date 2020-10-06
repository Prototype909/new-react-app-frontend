import React from 'react';
import { Link } from "react-router-dom";
import HomeLink from '../Components/HomeLink'


class RecipeShowContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.history.location.state.title,
            text: this.props.history.location.state.text,
            image_url: this.props.history.location.state.image_url
        }
    }
    render() {

        return (
            <div>
                <h1>{this.state.title}</h1>
                <img src={this.state.image_url} alt={this.state.image}></img>
                <p>{this.state.text}</p>
                <HomeLink />
                <Link to="/recipes">Back</Link> 
            </div>
            
        )
    }
}

export default RecipeShowContainer;