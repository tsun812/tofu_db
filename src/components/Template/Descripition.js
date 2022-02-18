import React from 'react'
import { Form } from "react-bootstrap";

export default function Description() {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>App Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  )
}