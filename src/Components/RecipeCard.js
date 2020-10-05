import React from 'react';
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    console.log(props);
    return(
        <div>
            <Link to={{
                pathname: '/recipes/' + props.id,
                state: {
                    title: props.title,
                    text: props.text,
                    image_link: props.image_link
                }
            }}>{props.title}</Link>
        </div>
    )
}

export default RecipeCard;