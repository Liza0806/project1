import React from 'react';
import { Card } from './components/Card';



function App() {
  return (
    <div className="App">
      <p>This is react</p>
      <Card/>

    </div>
  );
}

export function Star (){
  return (
    <div>
    <div>star</div>
    <div>star</div>
    <div>star</div>
    <div>star</div>
    <div>star</div>
  </div>
  )
}

export function Accordion (){
  return (
    <div>
    <h3>Menu</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    </div>
  )
}


// function hello(){
//   debugger
//   alert("hello")
// }

export default App;
