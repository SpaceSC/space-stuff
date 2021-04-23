import './CSS/style.css';
import React, { useState, useEffect } from 'react'
import MarsObjects from './components/MarsObjects';
import LoadingMask from './components/LoadingMask';

// Create App component
function App() {
  const [objectsOnMars, setObjectsOnMars] = useState([]); // Set initial state of objectsOnMars variable to an []

  useEffect(() => {
    fetch("http://localhost:5000/", { // Send fetch request to port 5000 (as set in backend)
      credentials: "include", // Send a request with user credentials included (cookies, basic http auth, etc.), even for cross-origin calls
    })
    .then(res => res.json()) // Use json() to extract the JSON body content from the response
    .then(
      (result) => {
        setTimeout(function () { // setTimeout() to get enough 'loading time' to show off LoadingMask
        setObjectsOnMars(result.marsObjects); // Save result.marsObjects to objectsOnMars variable
        }, 1000); // Delay for 1 second
      },
      (error) => { // Handle errors
        console.log(error);
      }
    )
  }, []) // [] means this useEffect will run once

  // Render the following elements
  return (
    <div className="App">
      <h1>Space Stuff</h1>
      {/* Conditional rendering: if objectsOnMars.length is 0, render LoadingMask, otherwise render MarsObjects component */}
      { objectsOnMars.length === 0 ? <LoadingMask /> : <MarsObjects objectsOnMars={objectsOnMars}/>} {/* Pass down objectsOnMars to MarsObjects component */}
    </div>
  );
}

export default App; // Export App component
