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
  function handleSubmit (e) {
    e.preventDefault();
   let searchString = textInput.current.value.toUpperCase();
   
   if(!searchString){
    console.log(searchString)
    props.setFilteredRecords(props.selectedRecords)
   }
    const filteredRes = props.selectedRecords.filter((record) => {
      console.log(record.secondary)
    return record.primary && record.secondary && ((record.primary.toUpperCase() === searchString) || (record.secondary.toUpperCase() === searchString))
    });
    console.log(filteredRes)
    props.setFilteredRecords(filteredRes);  
  }
  return (
    <Form className="searchlayout" onSubmit={handleSubmit}>
      <Row>
        <Col xs={8}>
          <Form.Control placeholder="Enter keywords" ref={textInput}/>
        </Col>
        <Col>
        <Button type="submit">
          {element}
        </Button>
        </Col>
      </Row>
    </Form>
  );
}
