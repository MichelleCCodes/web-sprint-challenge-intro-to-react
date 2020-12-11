// Write your Character List component here
import React from 'react';
import EachCharacter from './EachCharacter';
import character from './EachCharacter';

const CharacterList = (props) => {

    const { characters } = props; 

    return (
        <div className="characters-container">
            <EachCharacter/>
        </div>
    )
}

export default CharacterList;