import React from 'react'
import { Form } from "react-bootstrap";

export default function Description({ appDescription }) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>App Description</Form.Label>
      <Form.Control as="textarea" rows={5} placeholder="Enter App Description" value={appDescription} />
    </Form.Group>
  )
}