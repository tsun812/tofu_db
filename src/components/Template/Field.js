import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function Field(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Option1</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Option2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
