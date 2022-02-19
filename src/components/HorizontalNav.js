import React from 'react'
import { Nav } from "react-bootstrap";

export default function HorizontalNav({setMode, mode}) {
  return (
    <Nav variant="pills" activeKey={mode}>
      <Nav.Item>
        <Nav.Link eventKey="Data" onClick={() => setMode("Data")}>Data</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Customization" onClick={() => setMode("Customization")}>Settings</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}