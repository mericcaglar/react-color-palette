import React from 'react';
import '../App.css';
import copy from 'copy-to-clipboard';
import {ToastsContainer, ToastsStore} from 'react-toasts';
const colors = require('nice-color-palettes/1000');

function colorBoxes(props) {

  const colorMap = colors[props.count].map((color) =>
      <li>
            <div id="colorBox" onClick={()=>{copy(color); ToastsStore.success("Color "+ color + " copied to your clipboard" )}} className="colorBox">
                <span style={{backgroundColor:color}} className="color"></span>
                <span className="colorText">{color}</span>
            </div>
      </li>
      
  );

  return (
        <div>
        <ul className="color-palette">
        {colorMap}
        </ul>
        <ToastsContainer store={ToastsStore}/>
        </div>
  );
}

export default colorBoxes;
