import classNames from "classnames";
import React from "react";
import useApplicationData from "hooks/useApplicationData";
import { useState } from "react";
import { get } from "request";

export default function AppListItem(props) {
  const { getApplicationData, setConfig,  state, setApplication } = useApplicationData();
  const apps = state.applications.map( a => <li>{a.app_name}</li> )
  return (
    <h2>
      {apps}
    </h2>
  )
}

