import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import useApplicationData from "hooks/useApplicationData";

export default function Field(props) {
  //console.log(props)
  const { state } = useApplicationData()

  const handleSelect = (evtKey) => {
    console.log("hello1")
    console.log(evtKey)
    console.log("hello2")
    let id = parseInt(props.applicationID)
    if (props.name === "Primary field" && evtKey) {
      props.setPrimaryField(evtKey, id)

    }
    else if (props.name === "Secondary field" && evtKey) {
      props.setSecondaryField(evtKey, id)
      //console.log(evtKey)
      // console.log(state)
    }

    // console.log(evtKey)
    // props.setSecondaryField(evtKey)


  }
  const options = props.fields.map((item, index) => {
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
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {props.selected}
        </Dropdown.Toggle>

        <Dropdown.Menu  >
          {options}
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
}
