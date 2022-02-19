import React from 'react'
import { Form } from "react-bootstrap";

export default function BackgroundImage({appBackgroundImage, updateApplicationData, saveApplicationData, applicationID}) {
  return (

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Image banner</Form.Label>
      <Form.Control type="url" value={appBackgroundImage} placeholder="Image URL" onChange={(event) => updateApplicationData("img_url" ,event.target.value)} onBlur={(event) => saveApplicationData(applicationID, "img_url", event.target.value)}/>
    </Form.Group>
  )
}