import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Search.scss"

 
export default function Search(props) {
  const element = <FontAwesomeIcon icon={faSearch} />
  return (
    <Form className="searchlayout">
      <Row>
        <Col xs={8}>
          <Form.Control placeholder="Enter keywords" />
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
