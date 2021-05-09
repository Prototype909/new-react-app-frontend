import React from 'react';
import { Link } from "react-router-dom";
import HomeLink from '../Components/HomeLink';

// const RecipeShowContainer = (props) => {
//     return (
//         <div><br/><br/>
//             <h1>{props.recipe.attributes.title}</h1>
//             <img className="showImage" src={props.recipe.attributes.image_link} alt={props.recipe.attributes.image_link}></img>
//             <p>{props.recipe.attributes.text}</p>
            
//             <Link to="/recipes">Back</Link>
//             <HomeLink /> 
//         </div>            
//     )

// }


 
class RecipeShowContainer extends React.Component{
    constructor(props) {
       super(props)
       this.state = {
           likes: 0
       }
       this.addLike = this.addLike.bind(this);
    };
 
    addLike(){
        this.setState({likes: this.state.likes +1})
    }
 
      render() {
       return (
        <div >
        <Link to={{
            pathname: '/recipes/' + this.props.id,
        }}>{this.props.title}</Link>
        <button onClick={() => this.addLike()}>Likes</button>
    <span class="likes"> Likes: {this.state.likes}</span>
    </div>
       )
    }
}




export default RecipeShowContainer;