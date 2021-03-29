import './CSS/style.css';
import React, { useState, useEffect } from 'react'
import MarsObjects from './components/MarsObjects';
import LoadingMask from './components/LoadingMask';

function App() {
  const [objectsOnMars, setObjectsOnMars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/", {
      credentials: "include",
    })
    .then(res => res.json())
    .then(
      (result) => {
        setTimeout(function () {
        setObjectsOnMars(result.marsObjects);
        }, 5000);
      },
      (error) => {
        console.log(error);
      }
    )
  }, [])

  return (
    <div className="App">
      <h1>Space Stuff</h1>
      { objectsOnMars.length===0 ? <LoadingMask /> : <MarsObjects objectsOnMars={objectsOnMars}/>}
      
    </div>
  );
}

export default App;
