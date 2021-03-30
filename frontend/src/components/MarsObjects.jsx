import React, { useState } from 'react'
import MarsObject from './MarsObject'

function MarsObjects({objectsOnMars}) {

  const [typeSelected, setTypeSelected] = useState("all");
  const [operationSelected, setOperationSelected] = useState("all");


  function setObjectType(e){
    setTypeSelected(e.target.value);
    e.target.checked="checked";
  }

  function checkObjectType(objectOnMars){
   if(typeSelected==="all"){
     return objectOnMars;
   } else {
    return objectOnMars.type===typeSelected;
    }
  }

  function checkObjectOperation(objectOnMars){
    if(operationSelected==="all"){
      return objectOnMars;
    } else {
     return objectOnMars.inOperation===operationSelected;
     }
  }

  function setObjectOperation(e){
    setOperationSelected(e.target.value);
    e.target.checked="checked";
  }

  return (
    <div className="marsObjects">
      <h2>Artificial objects on Mars</h2>
      
      {objectsOnMars.filter(checkObjectType).filter(checkObjectOperation).map(obj => (<MarsObject key={obj.object} object={obj}/>))}
      {/*
      typeSelected==="all" && !operationSelected==="all" ? objectsOnMars.filter(checkObjectOperation).map((obj) => <MarsObject key={obj.object} object={obj}/>) :
  !typeSelected==="all" && operationSelected==="all" ? */}
      

      <div className="radios">
        <input type="radio" id="all" name="selectType" value="all" onChange={setObjectType} defaultChecked/>
        <label htmlFor="all">all</label>
        <input type="radio" id="rovers" name="selectType" value="rover" onChange={setObjectType}/>
        <label htmlFor="rovers">rovers</label>
        <input type="radio" id="helicopter" name="selectType" value="helicopter" onChange={setObjectType}/>
        <label htmlFor="helicopter">helicopter</label>
      </div>
      <div className="radios">
        <input type="radio" id="all" name="selectOperation" value="all" onChange={setObjectOperation} defaultChecked/>
        <label htmlFor="all">all</label>
        <input type="radio" id="inOperation" name="selectOperation" value="true" onChange={setObjectOperation}/>
        <label htmlFor="inOperation">in operation</label>
        <input type="radio" id="notInOperation" name="selectOperation" value="false" onChange={setObjectOperation}/>
        <label htmlFor="notInOperation">not in operation</label>
      </div>
    </div>
  )
}

export default MarsObjects;
