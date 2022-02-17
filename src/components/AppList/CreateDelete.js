import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CreateDelete() {
  const create = <Link className='create' to="/app/create" style={{ textDecoration: 'none' }}>Create a New app</Link>
  return (
    <>
      <ul>{create}</ul>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>App Name</Form.Label>
          <Form.Control type="email" placeholder="Enter App Name" />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
        Create a New App
      </Button>
    </>
  )
}


