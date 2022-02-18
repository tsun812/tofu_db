import React from "react";
import "./NavBarConfig.scss"
import NavBarConfigItem from "./NarBarConfigItem";
import Field from "./Field";
import AppName from "./AppName";
import AppID from "./AppID";
import Description from "./Descripition";
import BackgroundImage from "./BackgroundImage";
import Font from "./Font";
import Theme from "./theme";
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
          
       
          <Field key={1} fields={props.fields} name="Primary field" setPrimaryField={props.setPrimaryField}/>
          <Field key={2} fields={props.fields} name="Secondary field" setSecondaryField={props.setSecondaryField}/>
          
          <Form>
          <AppID applicationID={props.applicationID}/>
          <AppName appName={props.appName}/>
          <Description appDescription={props.appDescription}/>
          <BackgroundImage appBackgroundImage={props.appBackgroundImage}/>
          <Font appFontSize={props.appFontSize}/>
          <Theme applicationTheme={props.applicationTheme}/>
        </Form>

        </nav>
        </section>
  );
}