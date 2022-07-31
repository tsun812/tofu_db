import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import useApplicationData from "hooks/useApplicationData";
import "./Sort.scss";
export default function Sort({ setSortBy, sort }) {
  const handleSelect = (evtKey, event) => {
    console.log(evtKey);
    console.log(sort);
    event.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    event.target.classList.add("active");
    if (sort !== evtKey) {
      setSortBy(evtKey);
    }
  };

  let sortOptions = ["Date added: oldest", "Date added: newest"];
  const options = sortOptions.map((item, index) => {
    return (
      <Dropdown.Item key={index} eventKey={item}>
        {item}
      </Dropdown.Item>
    );
  });

  return (
    <Form.Group className="sortButton" controlId="exampleForm.ControlInput1">
      <Dropdown
        onSelect={(evtKey, event) => handleSelect(evtKey, event)}
        className="sort-button"
      >
        <Dropdown.Toggle id="dropdown-basic">Sort by</Dropdown.Toggle>

        <Dropdown.Menu>{options}</Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
}
