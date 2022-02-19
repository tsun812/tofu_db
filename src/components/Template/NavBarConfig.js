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
import Delete from "./Delete";
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
      <h2>App Settings</h2>
      <hr></hr>
        <nav className="sidebar__menu">
        <Form>
          <Field key={1} fields={props.fields} name="Primary field" selected={props.primaryField} setPrimaryField={props.setPrimaryField} applicationID={props.applicationID}/>
          <Field key={2} fields={props.fields} name="Secondary field" selected={props.secondaryField} setSecondaryField={props.setSecondaryField} applicationID={props.applicationID}/>
          <AppID applicationID={props.applicationID}/>
          <AppName appName={props.appName} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/>
          <Description appDescription={props.appDescription} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/>
          <BackgroundImage appBackgroundImage={props.appBackgroundImage} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/>
          <Font appFontSize={props.appFontSize} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/>
          <Theme applicationTheme={props.applicationTheme} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/>
          <hr></hr>
          <Delete deleteApplication={props.deleteApplication} applicationID={props.applicationID}/>
        </Form>

        </nav>
        </section>
  );
}