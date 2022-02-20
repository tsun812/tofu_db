import classNames from "classnames";
import React from "react";
import "./AppListItem.scss";
import useApplicationData from "hooks/useApplicationData";
import { useState } from "react";
import { get } from "request";
import { Link } from "react-router-dom";

export default function AppListItem(props) {
  const {appID, appName, getApplicationData, deleteApplication, selected, setApplication} = props;

  const appnameclass = classNames("app_name", {
    "app_name--selected": selected,
  });

    return (
      <>
        <Link
        className={appnameclass}
        to={`app/${appID}`}
        onClick={() => {setApplication(appID)}}
        style={{ textDecoration: "none" }}
      >
        {appName}
      </Link>{" "}
      </>
      
    );
  };

