import React from 'react'
import { Nav } from "react-bootstrap";

import "components/HorizontalNav.scss";

export default function HorizontalNav({setMode, mode}) {
  return (
    <Nav variant="pills" activeKey={mode}>
      <Nav.Item>
        <Nav.Link eventKey="Data" onClick={() => setMode("Data")} className="horizontalNav">Data</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Customization" onClick={() => setMode("Customization")} className="horizontalNav">Settings</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}