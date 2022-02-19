import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import useApplicationData from "hooks/useApplicationData";
import "./Sort.scss"
export default function Sort(props) {
  //console.log(props)
  const { state } = useApplicationData()

  const handleSelect = (evtKey) => {
    // console.log(evtKey)
    // let id = parseInt(props.applicationID)
    // if (props.name === "Primary field" && evtKey) {
    //   props.setPrimaryField(evtKey, id)

    // }
    // else if (props.name === "Secondary field" && evtKey) {
    //   props.setSecondaryField(evtKey, id)
    // }
  }
  let sortOptions = ["Date added: oldest", "Date added: newest"]
  const options = sortOptions.map((item, index) => {
    return (
      <Dropdown.Item key={index} eventKey={item} >{item}</Dropdown.Item>
    )
  }
  )

  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label>{props.name}</Form.Label>
      <Dropdown onSelect={(evtKey) => handleSelect(evtKey)} className="sort-button">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort by
        </Dropdown.Toggle>

        <Dropdown.Menu  >
          {options}
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
}
