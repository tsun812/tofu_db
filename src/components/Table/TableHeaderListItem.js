import React from 'react'
export default function TableHeaderListItem({ field_value, field_id, deleteColumn }) {
  return (
    <th className="field" data-field-value={field_value} data-field-id={field_id}>{field_value}<button onClick={() => deleteColumn(field_id)}>Delete</button></th>
  )
}
