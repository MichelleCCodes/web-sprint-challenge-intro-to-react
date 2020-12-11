// Write your Character List component here
import React from 'react';
import EachCharacter from './EachCharacter';
import styled from 'styled-components';

const ListContainer = styled.div`
background-color: gray;
width: 50vw;
display: flex; 
flex-direction: column; 
justify-content: center; 
margin: 0 auto 3em; 
border-radius: .5em; 
`


const CharacterList = (props) => {

    const { characters } = props; 

    return (
        <ListContainer>
            {characters.map(character => {
                return (
                    <EachCharacter key = {character.name} character = {character} />
                )
            })
            }
        </ListContainer>
    )
}

export default CharacterList;

{/* <div className="container">
            {characters.map(character => {
                return (
                    <EachCharacter key = {character.name} character = {character} />
                )
            })
            }
        </div> */}