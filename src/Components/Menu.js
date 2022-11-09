/* Add any imports you think you might need here! */
import React, { useState } from 'react';
import Color from './Color';


const Menu = (props) => { 
    //use color component
    return (
      <div className="colorOptions">
          <Color color="red" handleClick = {props.handleClick}></Color>
          <Color color="pink" handleClick = {props.handleClick}></Color>
          <Color color="blue" handleClick = {props.handleClick}></Color>
          <Color color="green" handleClick = {props.handleClick}></Color>

      </div>
    );
}

export default Menu;