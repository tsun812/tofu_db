import React from 'react'
import { Form } from "react-bootstrap";

export default function Font() {
  return (

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Font Size</Form.Label>
      <Form.Control type="email" placeholder="Font Size" />
    </Form.Group>
  )
}