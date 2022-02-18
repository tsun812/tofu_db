import React from "react";
import "./NavBarConfig.scss"
import NavBarConfigItem from "./NarBarConfigItem";
import Field from "./Field";
import { Form } from "react-bootstrap";
import {Link} from "react-router-dom"
//import {useContext} from 'react'
//import {configContext} from 'providers/ConfigProvider.js'

export default function NavBarConfig(props) {
  //const {config, select} = useContext(configContext)
  const listOfConfigs = props.configs.map(item => {
  
    return(<NavBarConfigItem
      configurationName = {item.configName}
      selected = {item.configName === props.value}
      setCurrent = {event => props.onChange(props.value)}
      />
  )})
 
  return(
    <section className="sidebar__text sidebar--centered">
      <Link className="customize" style={{ textDecoration: "none" }} to="app/customize">Customize app</Link>
        <nav className="sidebar__menu">
          <Field key={1} fields={props.fields} name="Primary field" setPrimaryField={props.setPrimaryField} applicationID={props.applicationID}/>
          <Field key={2} fields={props.fields} name="Secondary field" setSecondaryField={props.setSecondaryField} applicationID={props.applicationID}/>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>App ID</Form.Label>
            <Form.Control type="email" placeholder="App ID" disabled readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>App Name</Form.Label>
            <Form.Control type="email" placeholder="App Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>App Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Background Image</Form.Label>
            <Form.Control type="email" placeholder="Image URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Font Size</Form.Label>
            <Form.Control type="email" placeholder="Font Size" />
          </Form.Group>
          <Form.Label>Display theme</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">List</option>
            <option value="2">Grid</option>
            <option value="3">Cards</option>
            <option value="4">Table</option>
          </Form.Select>
        </Form>

        </nav>
        </section>
  );
}