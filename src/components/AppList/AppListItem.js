import classNames from "classnames";
import React from "react";
import useApplicationData from "hooks/useApplicationData";
import { useState } from "react";
import { get } from "request";
import Table from "components/Table";
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
console.log(React.version, "react version")

export default function AppListItem({getApplicationData}) {
  const { setConfig, state, setApplication } = useApplicationData();
  const apps = state.applications.map(key => <li><Link to={`app/${key.id}`} onClick={() => getApplicationData(key.id)}>{key.app_name}</Link></li>)
  return (
    <>{apps}</>
  )
}

