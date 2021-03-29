import './App.css';
import React, { useState, useEffect } from 'react'
import MarsObjects from './components/MarsObjects';

function App() {

  useEffect(() => {
    fetch("http://localhost:5000/", {
      credentials: "include",
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
        
      }
    )
  }, [])

  return (
    <div className="App">
      <MarsObjects />
    </div>
  );
}

export default App;
