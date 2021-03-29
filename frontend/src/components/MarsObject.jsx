import React, { useState } from 'react'

function MarsObject({object}) {

  const [showMore, setShowMore] = useState(false);
  const [more, setMore] = useState("+");

  function moreInfo(){
    setShowMore(!showMore);
    more==="+" ? setMore("-") : setMore("+");
  }

  return (
    <div>
      {object.object}
      <button className="showMoreBtn" onClick={moreInfo}>{more}</button>
      {showMore && 
      <div className="moreInfo">
        <p>year: {object.year}</p> 
        <p>agency: {object.agency}</p> 
        <p>mission: {object.mission}</p> 
        <p>mass(kg): ${object.year}</p> 
        <p>type: {object.type}</p> 
      </div>
      }
    </div>
  )
}

export default MarsObject;
