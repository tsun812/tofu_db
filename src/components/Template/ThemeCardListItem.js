import React from "react";
import "./ThemeCardListItem.scss";
import { Card, Button } from "react-bootstrap";
export default function ThemeCardListItem(props) {
  return (
    <Card style={{ width: '14rem'}}>
      <Card.Img variant="top" src="/images/logo4.png" className="logo" />
      <Card.Body>
        <Card.Title>{props.primary}</Card.Title>
        <Card.Text>
         {props.secondary}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  )
}