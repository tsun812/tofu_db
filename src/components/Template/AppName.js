import React from 'react'
import { Form } from "react-bootstrap";

export default function AppName({AppName}) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>App Name</Form.Label>
      <Form.Control type="text" value={AppName} />
    </Form.Group>
  )
}