import React from 'react'
import { Form } from "react-bootstrap";

export default function Description({ appDescription, updateApplicationData, saveApplicationData, applicationID}) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>App Description</Form.Label>
      <Form.Control as="textarea" rows={5} placeholder="Enter App Description" value={appDescription} onChange={(event) => updateApplicationData("description" ,event.target.value)} onBlur={(event) => saveApplicationData(applicationID, "description", event.target.value)}/>
    </Form.Group>
  )
}