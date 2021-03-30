import React, { useState } from 'react'
import MarsObject from './MarsObject'

function MarsObjects({objectsOnMars}) {

  const [type, setType] = useState("all");

  function setObjectType(e){
    setType(e.target.value);
  }

  return (
    <div className="marsObjects">
      <h2>Artificial objects on Mars</h2>
      {console.log(objectsOnMars)}
      {objectsOnMars.map((obj) => (<MarsObject key={obj.object} object={obj}/>))}
      <div className="radios">
        <input type="radio" id="all" name="selectType" value="all" onChange={setObjectType} checked="checked"/>
        <label for="all">all</label>
        <input type="radio" id="rovers" name="selectType" value="rover" onChange={setObjectType}/>
        <label for="rovers">rovers</label>
        <input type="radio" id="helicopter" name="selectType" value="helicopter" onChange={setObjectType}/>
        <label for="helicopter">helicopter</label>
      </div>
    </div>
  )
}

export default MarsObjects;
