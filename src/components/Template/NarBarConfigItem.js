import React from "react";
import {useContext} from 'react'
import {configContext} from 'providers/ConfigProvider.js'
import classNames from "classnames";
import "./NavBarConfigItem.scss"
export default function NavBarConfigItem(props) {
  
  const {config, select} = useContext(configContext)
  const addClass = classNames("nav__bar__item", {"nav__bar__item--selected":props.selected})
  return(
    <li onClick={select(props.configurationName)}>
      <button> {props.configurationName}</button> 
  
    </li>
  )
}