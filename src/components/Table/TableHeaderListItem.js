import React from 'react'
export default function TableHeaderListItem({ field_value, field_id }) {
  return (
    <th className="field" data-field-value={field_value} data-field-id={field_id}>{field_value}</th>
  )
}
