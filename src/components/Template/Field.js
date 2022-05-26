import React from "react";
import { Dropdown, Form } from "react-bootstrap";

export default function Field(props) {

  const handleSelect = (evtKey) => {
    let id = parseInt(props.applicationID)
    if (props.name === "Primary field" && evtKey) {
      props.setPrimaryField(props.fieldsArray[evtKey]['field_name'], id)
    }
    else if (props.name === "Secondary field" && evtKey) {
      props.setSecondaryField(props.fieldsArray[evtKey]['field_name'], id)
    }
    else if (props.name === "Image field" && evtKey) {
      props.setImageField(props.fieldsArray[evtKey]['id'], id)
    }

  }

  //this section is to make image field only show field_type is image 
  let array = {};
  if (props.name === "Image field") {
    const filteredFieldID = Object.keys(props.fieldsArray).filter((field) =>
      props.fieldsArray[field]['field_type'] === "Image"
    )
    filteredFieldID.map((id) => {
      array[id] = props.fieldsArray[id]
    })
  } else {
    array = props.fieldsArray
  }

  const options = Object.keys(array).map((item, index) => {
    return (
      <Dropdown.Item key={index} eventKey={props.fieldsArray[item]['id']} >{props.fieldsArray[item]['field_name']}</Dropdown.Item>
    )
  }
  )

  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>{props.name}</Form.Label>
      <Dropdown onSelect={(evtKey) => handleSelect(evtKey)}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {props.selected}
        </Dropdown.Toggle>

        <Dropdown.Menu  >
          {options}
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
}
