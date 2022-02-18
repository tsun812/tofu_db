import React from 'react'
import { Form } from "react-bootstrap";

export default function BackgroundImage() {
  return (

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Background Image</Form.Label>
      <Form.Control type="email" placeholder="Image URL" />
    </Form.Group>
  )
}