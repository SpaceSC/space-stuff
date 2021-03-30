import React, { useState } from 'react'
import MarsObject from './MarsObject'

function MarsObjects({objectsOnMars}) {

  const [typeSelected, setTypeSelected] = useState("all");


  function setObjectType(e){
    console.log(e.target.value);
    setTypeSelected(e.target.value);
    e.target.checked="checked";
    console.log(typeSelected);
  }

  function checkObjectType(objectOnMars){
   if(typeSelected==="all"){
     return objectOnMars;
   } else {
    return objectOnMars.type===typeSelected;
    }
  }

  return (
    <div className="marsObjects">
      <h2>Artificial objects on Mars</h2>
      {typeSelected==="all" ? objectsOnMars.map((obj) => <MarsObject key={obj.object} object={obj}/>) : objectsOnMars.filter(checkObjectType).map(filteredObject => (<MarsObject key={filteredObject.object} object={filteredObject}/>))}
      <div className="radios">
        <input type="radio" id="all" name="selectType" value="all" onChange={setObjectType} defaultChecked/>
        <label htmlFor="all">all</label>
        <input type="radio" id="rovers" name="selectType" value="rover" onChange={setObjectType}/>
        <label htmlFor="rovers">rovers</label>
        <input type="radio" id="helicopter" name="selectType" value="helicopter" onChange={setObjectType}/>
        <label htmlFor="helicopter">helicopter</label>
      </div>
    </div>
  )
}

export default MarsObjects;
