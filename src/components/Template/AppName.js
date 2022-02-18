import React from 'react'
import { Form } from "react-bootstrap";

export default function AppName({appName, updateApplicationData, saveApplicationData, applicationID}) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>App Name</Form.Label>
      <Form.Control type="text" value={appName} onChange={(event) => updateApplicationData("app_name" ,event.target.value)} onBlur={(event) => saveApplicationData(applicationID, "app_name", event.target.value)}/>
    </Form.Group>
  )
}