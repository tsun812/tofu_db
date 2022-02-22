import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import useApplicationData from "hooks/useApplicationData";

export default function Field(props) {
  console.log('props.fieldsArray')
console.log(props.fieldsArray)

  const handleSelect = (evtKey) => {
    let id = parseInt(props.applicationID)
    if (props.name === "Primary field" && evtKey) {
      props.setPrimaryField(evtKey, id)
    }
    else if (props.name === "Secondary field" && evtKey) {
      props.setSecondaryField(evtKey, id)
    }
    else if (props.name === "Image field" && evtKey) {
      props.setImageField(evtKey, id)
    }

  }
  const options = props.fields.map((item, index) => {
    // console.log('item here!!!!!!!!!!!!!!!!!!!!!!!!!')
    // console.log(item)
    return (
      <Dropdown.Item key={index} eventKey={item} >{item}</Dropdown.Item>
      // href="#/action-1"
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
