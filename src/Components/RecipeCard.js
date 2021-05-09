import React from 'react';
import { Link } from "react-router-dom";

// const RecipeCard = (props) => {
//         return(
//             <div>
//                 <Link to={{
//                     pathname: '/recipes/' + props.id,
//                 }}>{props.title}</Link>
//             </div>
//     )
// }

class RecipeCard extends React.Component{
    constructor(props) {
       super(props)
       this.state = {
           likes: 0,
           characters: 0
       }
       this.addLike = this.addLike.bind(this);
       this.addDislike = this.addDislike.bind(this);
       this.handleChange = this.handleChange.bind(this);
    };
 
    addLike(){
        this.setState({likes: this.state.likes + this.state.characters})
    }

    addDislike(){
        if (this.state.likes - this.state.characters < 0){
            this.setState({likes: 0})
        } else {
            this.setState({likes: this.state.likes - this.state.characters})
        }        
    }

    handleChange(event){
        this.setState({characters: event.target.value.length})
        console.log(this.state)
    }
 
      render() {
       return (
        <div >
        <Link to={{
            pathname: '/recipes/' + this.props.id,
        }}>{this.props.title}</Link>
        <button onClick={() => this.addLike()}>Likes</button>
        <button onClick={() => this.addDislike()}>Dislikes</button>
        <input
            onChange={this.handleChange}
        />
    <span class="likes"> Likes: {this.state.likes}</span>
    </div>
       )
    }
}

export default RecipeCard;