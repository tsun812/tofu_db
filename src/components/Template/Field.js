import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import useApplicationData from "hooks/useApplicationData";

export default function Field(props) {
  console.log(props)
  const {state} = useApplicationData()
  
  const handleSelect =(evtKey) => {
    if(props.setPrimaryField) {
      props.setPrimaryField(evtKey)
      
      console.log(evtKey)
    }
   // props.setSecondaryField(evtKey)
    else if(props.setSecondaryField){
      props.setSecondaryField(evtKey, 1)
      console.log(state)
      console.log(evtKey)
    }
    console.log(state)
  }
  const options = props.fields.map((item, index)=>{
    return(
    <Dropdown.Item href="#/action-1" key={index}  eventKey={item} >{item}</Dropdown.Item>
    )
  }
  )
  console.log(state)
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        {options}
      </Dropdown.Menu>
    </Dropdown>
  );
}
