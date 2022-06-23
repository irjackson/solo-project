import React, { Component } from 'react';

const CharSheets = props => {
  const { id, name, race, role, pronouns, charClass, level, notes } = props;
  return(
    <div className='charItems'>
        <ul>
          <p><li>{name}</li></p>
        <center>
          <strong>Race:</strong>
          <li>{race}</li>
          <strong>Pronouns:</strong>
          <li>{pronouns}</li>
          <strong>Role:</strong>
          <li>{role}</li>
          <strong>Class:</strong>
          <li>Level {level} {charClass}</li>
        </center>
        </ul>
      <p>
        <strong><u>Notes:</u></strong>
      </p>
        {notes}
    </div>
  )
}

export default CharSheets;