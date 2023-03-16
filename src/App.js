import './App.css';
import Users from './Users.js';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";
import Pokedex from './pokedex';
import axios from 'axios';



const Home = () =>{
  return(
    <div className='div-type-1'>
      <h1>What are Pokemon?</h1>

      <p>
      Pokemon is a popular franchise that has captivated the hearts of people of all ages since its inception in 1996. The series was first introduced as a video game for the Nintendo Game Boy and has since expanded into a multi-billion dollar empire encompassing video games, anime, trading cards, merchandise, and more. The concept of Pokemon revolves around a world filled with creatures that humans can capture, train, and battle with. Players take on the role of a Pokemon trainer and embark on a journey to catch and train Pokemon, with the ultimate goal of becoming the best Pokemon trainer in the world.
      </p>

      <p>
      One of the most appealing aspects of Pokemon is the variety of creatures available to catch and collect. From the cute and cuddly Pikachu to the powerful and legendary Mewtwo, each Pokemon has its own unique abilities, characteristics, and personality. The process of catching Pokemon involves exploring different environments, using various techniques to weaken the wild Pokemon, and then throwing a Pokeball to capture it. Once caught, the Pokemon can be trained to level up and evolve, unlocking new moves and becoming stronger.
      </p>

      <p>
      The popularity of Pokemon has led to various spin-offs and adaptations, including a long-running anime series, feature-length movies, and a trading card game. The franchise has also inspired a generation of gamers and creatives, with many people citing it as a significant influence on their careers and passions. Whether you're a long-time fan or a newcomer, there's no denying that Pokemon is a timeless franchise that continues to capture the hearts of people around the world.
      </p>

    </div>
    
  )
}

const Types = () => {
  return(
    <div className='div-type-1'>
    <h1>Types of Pokemon</h1>

    <p> 
    There are 18 different types of Pokemon, each with unique characteristics and abilities. The types of Pokemon are Normal, Fire, Water, Grass, Electric, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, and Fairy. Understanding the different types of Pokemon and their strengths and weaknesses is crucial for trainers to build a strong and versatile team.
    </p>

    <p>
    Each type of Pokemon has its own set of strengths and weaknesses in battle. Some types are more effective against certain types than others. For example, Fire-type moves are strong against Grass, Bug, Ice, and Steel types, but weak against Water, Rock, Dragon, and Fire types. Water-type moves, on the other hand, are strong against Fire, Ground, and Rock types, but weak against Grass, Electric, and Dragon types. Understanding these matchups can help trainers choose the best Pokemon for their team and use effective strategies in battle.
    </p>

    </div>
  )
}

const PokemonPokedex = () => {
return (
<Pokedex />
)
}


function App() {
  return (

    <Router>
    <div className="App">
      <Link to="/">What are Pokemon?</Link>
      <Link to="/Types">Types of Pokemon</Link>
      <Link to="/pokedex">Pokedex</Link>
      <Link to="/users/2">Userpage</Link>
      
      
      
      

      
    </div>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/Types" element = {<Types />} />
      <Route path = "/pokedex" element = {<PokemonPokedex />} />
      <Route path = "/users/:uid" element = {<Users />} />

    </Routes>
    </Router>


  );
}

export default App;
