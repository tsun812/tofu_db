import classNames from "classnames";
import React from "react";
import useApplicationData from "hooks/useApplicationData";
import { useState } from "react";
import { get } from "request";
import {BrowserRouter as Router, Link, Route, Routes, Navigate,usePara} from 'react-router-dom';
console.log(React.version,"react version")

export default function AppListItem(props) {
  const { getApplicationData, setConfig,  state, setApplication } = useApplicationData();
  const apps = state.applications.map( key => <Link to={`app/${key.id}`}>{key.app_name}</Link>)
  return (
  <>{apps}</>
  )
}

