import React from 'react'
import { Form } from "react-bootstrap";

export default function Theme() {
  return (
    <>
      <Form.Label>Display theme</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="1">List</option>
        <option value="2">Grid</option>
        <option value="3">Cards</option>
        <option value="4">Table</option>
      </Form.Select>
    </>
  )
}