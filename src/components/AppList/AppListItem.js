import classNames from "classnames";
import React from "react";
import useApplicationData from "hooks/useApplicationData";
import { useState } from "react";
import { get } from "request";
import { Link } from "react-router-dom";

export default function AppListItem(props) {
  const array = props.applications_array;
  const apps = Object.keys(array).map((key) => (
    <>
      <Link
        className="app_name"
        to={`app/${array[key].id}`}
        onClick={() => {
          props.getApplicationData(array[key].id);
          props.setMode("AppDetails-Data");
        }}
        style={{ textDecoration: "none" }}
      >
        {array[key].app_name}
      </Link>{" "}
      &nbsp;&nbsp;
      <button
        className="delete_button"
        style={{
          color: "white",
          backgroundColor: "#222f3e",
          maxWidth: "70px",
          maxHeight: "30px",
        }}
        onClick={() => {props.deleteApplication(array[key].id)}}
      >
        Delete
      </button>
      <br></br>
    </>
  ));
    return (
      <p>
        <Link className="logo" style={{ textDecoration: "none" }} to="/">
          <h1>
            TOFU DB<span className="tofu">🧈</span>
          </h1>
        </Link>
        <br></br>
        <h2>My Apps </h2>
        <br></br> {apps}
      </p>
    );
  };

