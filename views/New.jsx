import React from 'react';
const React = require('react');
function New(){
  return(
    <div>
      <h1>Flights FORM</h1>
      <form action='/flights' method='POST'>
        Airline Name:<input type='text' name='name'/>
        <br/>
        <input type='submit' value='Find New Flight'/>
      </form>
    </div>
  );
}

export default New;