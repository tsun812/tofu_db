import React from 'react'
import { Form } from "react-bootstrap";

export default function BackgroundImage({appBackgroundImage}) {
  return (

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Background Image</Form.Label>
      <Form.Control type="email" value={appBackgroundImage} placeholder="Image URL" />
    </Form.Group>
  )
}