import React from 'react'
import { Form } from "react-bootstrap";
export default function Theme({applicationTheme}) {
console.log(applicationTheme)
  return (
    <>
      <Form.Label>Display theme</Form.Label>
      <Form.Select aria-label="Default select example" value={applicationTheme}>
        <option value="List">List</option>
        <option value="Grid">Grid</option>
        <option value="Card">Cards</option>
        <option value="Table">Table</option>
      </Form.Select>
    </>
  )
}