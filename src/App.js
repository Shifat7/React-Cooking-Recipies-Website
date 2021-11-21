import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Recipie from './Recepies';


const App = () => {

  const App_ID = "3b60ac32";
  const App_Key = "167f60f1887df651858fda248791c4f1";



  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  useEffect(() => {

  getrecipies();

   }, [query]);

    const getrecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`)

    const Data = await response.json();
    setRecipies(Data.hits);
    console.log(Data.hits);
    } 

    const updateSearch = e => {
      setSearch(e.target.value);

    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }


  return (
  <div className="App">

    <h1 className="header">Cooking Recipe Search</h1>

    <form className="Search_Form" onSubmit={getSearch}>
      <input type="text" className="Search_Bar" value={search} onChange={updateSearch}/>
      <button type="submit" className="Search_Button"> Search </button>


    </form>
    <div className="recipies">
   {recipies.map(
      recipie => (

        <Recipie 
        key={recipie.recipe.label}
        title={recipie.recipe.label} 
        Calories={recipie.recipe.calories}
        Image={recipie.recipe.image}
        Ingredients={recipie.recipe.ingredients}
        />

      ))}
    </div>  
  </div>
);}

export default App;




