import React from "react";
import "./NavBarConfig.scss"
import NavBarConfigItem from "./NarBarConfigItem";
import {useContext} from 'react'
import {configContext} from 'providers/ConfigProvider.js'
let configOptions = [{configName: "background_color", avatar: null}, {configName: "font", avatar: null}, {configName: "description", avatar: null}, {configName: "display_theme", avatar: null}, {configName: "app_name", avatar: null}, {configName: "img_url", avatar: null} ]
export default function NavBarConfig() {
  const {config, select} = useContext(configContext)
  const listOfConfigs = configOptions.map(item => {
  
    return(<NavBarConfigItem
      configurationName = {item.configName}
      selected = {item.configName === config}
      />
  )})
  return(
    <section className="sidebar__text sidebar--centered">
      <h3>Customize your template</h3>
       <hr className="sidebar__separator" />
        <nav className="sidebar__menu">
          <ul>{listOfConfigs}</ul>  
        </nav>
        </section>
  );
}