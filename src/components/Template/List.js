import AppListItem from "components/AppList/AppListItem";
import React from "react";
import "./GridItem.scss";
import "./List.scss";
export default function List(props) {
  console.log(props.filteredRecords);
  let res;
  if (Array.isArray(props.filteredRecords) && props.filteredRecords.length > 0) {
    res = props.filteredRecords.map((element, index) => {
      return (
        <li className="wrapper" key={index}>
          <div>{element.primary}</div>
          <div>{element.secondary}</div>
        </li>
      );
    });
  } else {
    res = props.selectedRecords.map((element, index) => {
      return (
        <li className="wrapper" key={index}>
          <div className="primary">{element.primary}</div>
          <div>{element.secondary}</div>
        </li>
      );
    });
  }

  return <ul className="listUL">{res}</ul>;
}