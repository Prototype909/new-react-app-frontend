import React from 'react';
import { Link } from "react-router-dom";
  

class HomeContainer extends React.Component{

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div><br/><br/>
                <h1>Steve's Recipes!</h1>
                <h2>TRY ME RECIPES OR LITERALLY PERISH.</h2>
                <Link to="/recipes">Recipes</Link> 
            </div>
        )
    }
};

export default HomeContainer;