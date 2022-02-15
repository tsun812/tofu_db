import classNames from "classnames";
import React from "react";

export default function AppListItem(props) {
  const getAppLists = () => {
    if (props.apps === 0) {
      return "No apps exist yet"
    }
    else {return "From AppListItem"}
  }

  return (
    <li onClick={() => props.setApp }>
    <h3>{getAppLists()}</h3>
    </li>
  )
}
