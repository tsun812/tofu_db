import classNames from "classnames";
import React from "react";
import useApplicationData from "hooks/useApplicationData";
import { useState } from "react";
import { get } from "request";
import {Link} from 'react-router-dom';

export default function AppListItem(props) {
  const { state,deleteApplication } = useApplicationData();
  const apps = state.applications.map( key =>
  <>
  <Link className="app_name" to={`app/${key.id}`} style={{ textDecoration: 'none' }}>{key.app_name}</Link> &nbsp;&nbsp;
  <button className="delete_button" style={{color:"white" ,backgroundColor:"#222f3e"  , maxWidth: '70px', maxHeight: '30px'}} onClick={() => deleteApplication(key.id)}>Delete</button><br></br>
  </> )
  return (
 <p><Link className="logo" style={{ textDecoration: 'none' }} to="/"><h1>TOFU DB<span className="tofu">🧈</span></h1></Link><br></br><h2>My Apps </h2><br></br> {apps}</p>
  ) 
}