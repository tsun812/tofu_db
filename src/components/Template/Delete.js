import React from 'react'
import { Button, Form } from 'react-bootstrap'
export default function Delete({deleteApplication, applicationID, setMode}) {
  return (
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Delete App</Form.Label><br></br>
        <Button variant="danger" onClick={() => {deleteApplication(applicationID); setMode("Data")}}>Delete this App</Button>
      </Form.Group>
  )
}