import React from 'react';
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
        return(
            <div>
                <Link to={{
                    pathname: '/recipes/' + props.id,
                }}>{props.title}</Link>
            </div>
    )
}

export default RecipeCard;