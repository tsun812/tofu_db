import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import useApplicationData from "hooks/useApplicationData";

export default function Field(props) {
  //console.log(props)
  const {state} = useApplicationData()
  
  const handleSelect =(evtKey) => {
    console.log("hello")
<<<<<<< HEAD
    let id = parseInt(props.appId)
    
    if(props.name === "Primary field" && evtKey) {
     
=======
    let id = parseInt(props.applicationID)
    if(props.name === "Primary field" && evtKey) {
>>>>>>> master
      props.setPrimaryField(evtKey, id)
      
    }
    else if(props.name === "Secondary field" && evtKey ){
        props.setSecondaryField(evtKey, id)
<<<<<<< HEAD
        
=======
        //console.log(evtKey)
       // console.log(state)
>>>>>>> master
      }
    
     // console.log(evtKey)
   // props.setSecondaryField(evtKey)
   
   
  }
  const options = props.fields.map((item, index)=>{
    return(
    <Dropdown.Item href="#/action-1" key={index}  eventKey={item} >{item}</Dropdown.Item>
    )
  }
  )
  
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu  >
        {options}
      </Dropdown.Menu>
    </Dropdown>
  );
}
