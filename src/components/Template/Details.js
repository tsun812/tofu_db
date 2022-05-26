import React from "react";
import "./Details.scss";
import DetailsList from "./DetailsList";

export default function Details(props) {
  return (
    <>
    <br></br>
      <h1>Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <DetailsList selectedRecord={props.selectedRecord} fieldlist={props.fieldlist} />
        </tbody>
      </table>
    </>
  )
}
