import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import useApplicationData from "hooks/useApplicationData";

export default function Field(props) {
  //console.log(props)
  const {state} = useApplicationData()
  
  const handleSelect =(evtKey) => {
    if(props.name === "Primary field" && evtKey) {
      props.setPrimaryField(evtKey, 1)
      
    }
    else if(props.name === "Secondary field" && evtKey ){
        props.setSecondaryField(evtKey, 1)
        //console.log(evtKey)
       // console.log(state)
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
