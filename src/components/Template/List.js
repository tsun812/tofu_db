import AppListItem from "components/AppList/AppListItem";
import React from "react";
import "./GridItem.scss";
import "./List.scss";
import { Button } from "react-bootstrap";
export default function List(props) {
  let res;
  if (Array.isArray(props.filteredRecords) && props.filteredRecords.length > 0) {
    res = props.filteredRecords.map((element, index) => {
      return (
        <li className="wrapper" key={index}>
          <div className="field">
          <div className="primary">{element.primary}</div>
          <div>{element.secondary}</div>
          </div>
          <button
          className="btn btn-primary"
          onClick={() => {props.setRecordDetails(element.id); props.setDetail('show');}}
        >
          Details
        </button>
        </li>
      );
    });
  } else {
    res = props.selectedRecords.map((element, index) => {
      return (
        <li className="wrapper" key={index}>
          <div className="field">
          <div className="primary">{element.primary}</div>
          <div>{element.secondary}</div>
          </div>
          <button
          className="btn btn-primary button-resize" 
          onClick={() => {props.setRecordDetails(element.id); props.setDetail('show');}}
        >
          Details
        </button>
        </li>
      );
    });
  }

  return <ul className="listUL">{res}</ul>;
}