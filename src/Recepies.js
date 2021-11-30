import React from "react"; 
import './App.css';


const Recipie = (props) => {

    return (
        <div className="recipies">
            <h1>{props.title}</h1>
            <p>Calories={props.Calories}</p>
            <figure>
            <figcaption>Ingredients: </figcaption>
            <ol className="lists">
                {props.Ingredients.map(
                    ingredient =>(
                        <li>{ingredient.text}</li>
                    ))} 
            </ol>
            </figure>
            <img src={props.Image} alt="not loaded" className="img"/>
        </div>
    );
}

export default Recipie;