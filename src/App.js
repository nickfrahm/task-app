import React, {Component} from 'react'
import Overview from './components/Overview'

function App() {
  return (
    <div className="App">
      <Overview></Overview>
      <input id='taskInput'></input>
      <button id='submitBtn'>Submit</button>
    </div>
  );
}

export default App;
