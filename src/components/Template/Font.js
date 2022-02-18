import React from 'react'
import { Form } from "react-bootstrap";
import { useState } from 'react';

export default function Font({appFontSize, updateApplicationData, saveApplicationData, applicationID}) {
  return (

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Font Size</Form.Label>
      <Form.Control type="number" placeholder="Font Size" value={appFontSize} onChange={(event) => updateApplicationData("font" ,event.target.value)} onBlur={(event) => saveApplicationData(applicationID, "font", event.target.value)}/>
    </Form.Group>
  )
}