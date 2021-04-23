import React, { useState } from 'react'

function MarsObject({object}) {

  const [showMore, setShowMore] = useState(false); // Set initial state for showing details
  const [more, setMore] = useState("+"); // Set initial state for what is to be written on button

  // On each click event, call this function
  function moreInfo(){
    setShowMore(!showMore); // Set showMore to the opposite if its current state
    more === "+" ? setMore("-") : setMore("+"); // Set button text
  }

  return (
    <div>
      {object.object}
      <button className="showMoreBtn" onClick={moreInfo}>{more}</button>
      {/* Conditional rendering: if showMore is true, render the details */}
      {showMore && 
      <div className="moreInfo">
        <p>year: {object.year}</p> 
        <p>agency: {object.agency}</p> 
        <p>mission: {object.mission}</p> 
        <p>mass(kg): {object.mass}</p> 
        <p>type: {object.type}</p> 
      </div>
      }
    </div>
  )
}

export default MarsObject;
