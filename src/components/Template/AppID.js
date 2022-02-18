import React from 'react'
import { Form } from "react-bootstrap";

export default function AppID({applicationID}) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>App ID</Form.Label>
      <Form.Control type="text" value={applicationID} disabled readOnly />
    </Form.Group>
  )
}