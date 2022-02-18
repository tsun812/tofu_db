import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

export default function CreateForm({ createNewApplication }) {
  const [value, setValue] = useState()
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>App Name</Form.Label>
          <Form.Control type="text" placeholder="Enter App Name" onChange={e => setValue(e.target.value)}/>
        </Form.Group>
        <div className="createcancel">
          <Button
            variant="primary"
            type="button"
            // onClick={(event) => createNewApplication(event.target.value)}
            onClick={() => createNewApplication(value)}>Create
          </Button>
          <Button variant="danger" type="submit">
            <Link
              className="cancelbutton"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Cancel
            </Link>
          </Button>
        </div>
      </Form>

      <Routes>
        <Route path="/" element={<s />} />
      </Routes>
    </>
  );
}
