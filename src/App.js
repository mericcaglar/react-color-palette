import React,{useState} from 'react';
import './App.css';
import ColorBoxes from './components/colorBoxes';
import useKeypress from 'react-use-keypress';


function App(props) {

  const [count,setCount] = useState(0);

  const valueGenerator = () => {
    setCount(Math.floor(Math.random() * 900))
  }

  useKeypress(' ', ()=>{
    valueGenerator();
  });

  
  return (
      <div className="App">
        <div className="container">
          <h3>Color Palette Generator</h3>
          <ColorBoxes count={count}/>

          <div className="buttons">
          <button onClick={() => valueGenerator() }>Generate palette</button>
          <p>Or just press the “Spacebar” to generate new palettes.</p>
          </div>

          <div className="shortcut-text">
          Click to copy individual color
          </div>
        </div>
      </div>
  );
}

export default App;
