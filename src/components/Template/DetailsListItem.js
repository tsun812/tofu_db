import React from "react";
import "./Details.scss";
export default function DetailsListItem(props) {
  //find field name using field ID
  const field = props.fieldlist.filter((field)=>
    field.id === props.fieldID
  )
  const fieldName = field[0].field_name
  return (
    <tr>
      <th>{fieldName}</th>
      <td>{props.fieldValue}</td>
    </tr>
  )
}
