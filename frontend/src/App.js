import './App.css';
import React, { useState, useEffect } from 'react'
import MarsObjects from './components/MarsObjects';

function App() {
  const [objectsOnMars, setObjectsOnMars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/", {
      credentials: "include",
    })
    .then(res => res.json())
    .then(
      (result) => {
        //console.log(result);
        setObjectsOnMars(result.marsObjects);
        //console.log(objectsOnMars);
      },
      (error) => {
        console.log(error);
      }
    )
  }, [])

  return (
    <div className="App">
      <h1>Space Stuff</h1>
      <MarsObjects objectsOnMars={objectsOnMars}/>
    </div>
  );
}

export default App;
