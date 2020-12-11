import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterList from './components/CharacterList';
import styled from 'styled-components'

const Header = styled.h1`
font-family: 'Monoton', cursive;
letter-spacing: 3px; 
font-size: 2em; 
color: #3b3832;
`

const App = () => {

const [ characters, setCharacter ] = useState([]);

 useEffect(()=>{
   const fetchCharacters = () => {
    axios
    .get('https://swapi.dev/api/people/')
    .then(res=>{
      // console.log(res.data.results)
      setCharacter(res.data.results)
    })
    .catch(err=>{
      console.log("You have an error :'(")
    })
   }
   fetchCharacters();
}, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App container">
      <Header>Star Wars Starring Characters</Header>
      <CharacterList characters={characters}/>
    </div>
  );
}

export default App;


{/* <div className="App container">
      <h1 className="Header">Star Wars Starring Characters</h1>
      <CharacterList characters={characters}/>
    </div> */}