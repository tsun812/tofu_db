import AppListItem from "components/AppList/AppListItem";
import React from "react";
import "./List.scss";
import { Button } from "react-bootstrap";
export default function List(props) {
  console.log(props.filteredRecords);
  let res = props.filteredRecords.map((element, index) => {
    return (
      <li className="wrapper" key={index}>
        <div className="field">
          <div className="primary">{element.primary}</div>
          <div>{element.secondary}</div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            props.setRecordDetails(element.id);
            props.setDetail("show");
          }}
        >
          Details
        </button>
      </li>
    );
  });

  return <ul className="listUL">{res}</ul>;
}
