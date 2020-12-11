import React from 'react'; 
import styled from 'styled-components';

const Character = styled.div`
display: flex; 
justify-content:space-between;
max-width:100%;
border: 2px solid green;
border-radius: .2em;
margin: 1em; 
padding: .7em; 
color: black; 

&:hover{
  color:white; 
  opacity: 0.5; 
  background-color: #799183;
}
`

const Name = styled.span`
font-family: 'Andika New Basic', sans-serif;
font-size: 1.3em;
font-weight: bold;
`

const BirthYear = styled.span`
font-family: 'JetBrains Mono', monospace;
font-size: 1.3em;
`

const EachCharacter = (props) => {

const { character } = props

return (
  <div className="CharacterContainer">
    <Character>
      <Name>{character.name}</Name>
      <BirthYear>{character.birth_year}</BirthYear>
    </Character>  
  </div>
    )
}

export default EachCharacter; 