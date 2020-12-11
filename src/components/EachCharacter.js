import React from 'react'; 

const EachCharacter = (props) => {

const { character, key } = props;

return (
    <div className="each-character container"> 
      <div className = "character-info">
          <p>{character.name}</p>
          <span>{character.birth_year}</span>
      </div>  
    </div>
    )

}

export default EachCharacter; 