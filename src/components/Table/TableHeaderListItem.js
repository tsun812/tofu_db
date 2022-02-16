import React from 'react'
export default function TableHeaderListItem({ application_id, field_value, field_id, deleteColumn, updateFieldValue, saveFieldValue}) {
  console.log(`field_id =>${field_id}`)
  return (
    <th 
    className="field" 
    data-field-value={field_value} 
    data-field-id={field_id}>
      <input type="text" 
      value={field_value} 
      onChange={(event) => updateFieldValue(field_id, event.target.value)} 
      onBlur={(event) => saveFieldValue(application_id, field_id, event.target.value)}/>
      <button onClick={() => deleteColumn(field_id, application_id)}>❌</button></th>
  )
}
