import React from "react"; 
import './App.css';


const Recipie = ({title, Calories, Image, Ingredients}) => {

    return (
        <div className="recipies">
            <h1>{title}</h1>
            <p>Calories={Calories}</p>
            <p>Ingredients: </p>
            <ol>
                {Ingredients.map(
                    ingredient =>(
                        <li>{ingredient.text}</li>
                    ))} 
            </ol>
            <img src={Image} alt="not loaded"/>
        </div>
    );
}

export default Recipie;