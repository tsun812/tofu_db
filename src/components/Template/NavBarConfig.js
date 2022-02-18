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
      <ul>Customize your template</ul>
       <hr className="sidebar__separator" />
        <nav className="sidebar__menu">
          
       
          <Field key={1} fields={props.fields} name="Primary field" setPrimaryField={props.setPrimaryField}/>
          <Field key={2} fields={props.fields} name="Secondary field" setSecondaryField={props.setSecondaryField}/>
          
          <Form>
          <AppID applicationID={props.applicationID}/>
          <AppName AppName={props.AppName}/>
          <Description />
          <BackgroundImage />
          <Font />
          <Theme/>
        </Form>

        </nav>
        </section>
  );
}