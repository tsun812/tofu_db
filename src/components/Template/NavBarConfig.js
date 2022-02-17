import React from "react";
import "./NavBarConfig.scss"
import NavBarConfigItem from "./NarBarConfigItem";
import Field from "./Field";
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
      <h3>Customize your template</h3>
       <hr className="sidebar__separator" />
        <nav className="sidebar__menu">
          
       
          <Field key={1} fields={props.fields} name="Primary field" setPrimaryField={props.setPrimaryField}/>
          <Field key={2} fields={props.fields} name="Secondary field" setSecondaryField={props.setSecondaryField}/>
       
        </nav>
        </section>
  );
}