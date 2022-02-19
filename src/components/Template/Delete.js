import React from 'react'
import { Button, Form } from 'react-bootstrap'
export default function Delete({deleteApplication, applicationID}) {
  return (
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Delete App</Form.Label><br></br>
        <Button variant="danger" onClick={() => {deleteApplication(applicationID)}}>Delete this App</Button>
      </Form.Group>
  )
}