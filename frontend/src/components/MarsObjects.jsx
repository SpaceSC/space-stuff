import React from 'react'
import MarsObject from './MarsObject'

function MarsObjects({objectsOnMars}) {

  return (
    <div>
      <h2>Artificial objects on Mars</h2>
      {console.log(objectsOnMars)}
      {objectsOnMars.map((obj) => (<MarsObject key={obj.object} object={obj.object}/>))}
    </div>
  )
}

export default MarsObjects;
