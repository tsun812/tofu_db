import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function Field(props) {
  const options = props.fields.map(item=>{
    return(
    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
    )
  }
  )
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options}
      </Dropdown.Menu>
    </Dropdown>
  );
}
