//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from 'react';
import ReactDOM from 'react-dom';

let d=new Date();
let salutation;
let color;
if(d.getHours()<=12){
  salutation='Morning';
  color='red';
};
if(d.getHours()>=13&&d.getHours()<18){
  salutation='Afternoon';
  color='green';
};
if(d.getHours()>=18&&d.getHours()<=23){
  salutation='Evening';
  color='blue';
};
ReactDOM.render(<h1 style={{color:color}}>{`Good ${salutation}`}</h1>
  ,document.getElementById('root')
  )