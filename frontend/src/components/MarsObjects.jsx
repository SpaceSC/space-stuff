import React from 'react'
import MarsObject from './MarsObject'

function MarsObjects({objectsOnMars}) {

  return (
    <div className="marsObjects">
      <h2>Artificial objects on Mars</h2>
      {console.log(objectsOnMars)}
      {/* filter radio button here */}
      {objectsOnMars.map((obj) => (<MarsObject key={obj.object} object={obj}/>))}
    </div>
  )
}

export default MarsObjects;
