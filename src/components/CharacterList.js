// Write your Character List component here
import React from 'react';
import EachCharacter from './EachCharacter';

const CharacterList = (props) => {

    const { characters } = props; 

    return (
        <div className="characters-container">
            {characters.map(character => {
                return (
                    <EachCharacter key = {character.name} character = {character} />
                )
            })
            }
        </div>
    )
}

export default CharacterList;