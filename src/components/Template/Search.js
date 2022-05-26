import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import "./Search.scss"


export default function Search(props) {
  const element = <FontAwesomeIcon icon={faSearch} />
  const textInput = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    let searchString = textInput.current.value.toUpperCase();

    if (!searchString) {
      props.setFilteredRecords(props.selectedRecords)
    }
    const filteredRes = props.selectedRecords.filter((record) => {
      return record.primary && record.secondary && ((record.primary.toUpperCase() === searchString) || (record.secondary.toUpperCase() === searchString))
    });
    props.setFilteredRecords(filteredRes);
  }
  return (
    <Form className="searchLayout" onSubmit={handleSubmit}>
      <Form.Control placeholder="Enter keywords" ref={textInput} />
      <Button type="submit">
        {element}
      </Button>
    </Form>
  );
}
