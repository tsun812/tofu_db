import React from 'react'
import { Form } from "react-bootstrap";
export default function Theme({applicationTheme, updateApplicationData, saveApplicationData, applicationID}) {
  return (
    <>
      <Form.Label>Display theme</Form.Label>
      <Form.Select aria-label="Default select example" value={applicationTheme} onChange={(event) => updateApplicationData("display_theme" ,event.target.value)} onBlur={(event) => saveApplicationData(applicationID, "display_theme", event.target.value)}>
        <option value="List">List</option>
        <option value="Card">Card</option>
        <option value="Table">Table</option>
      </Form.Select>
    </>
  )
}