import React from 'react'
import { Form } from 'react-bootstrap'

export default function TableDataListItem({ rowData, updateInputValue, saveInputValue, application_id }) {
  return (
    Object.keys(rowData).map(value => {
      return <td
        data-field-id={rowData[value].field_id}
        data-record-id={rowData[value].record_id}
        data-value-id={rowData[value].id}>
        <Form.Control
          className="form-input"
          type="text"
          value={rowData[value].field_value}
          onChange={(event) => updateInputValue(rowData[value].record_id, rowData[value].id, event.target.value)}
          onBlur={(event) => saveInputValue(application_id, rowData[value].id, event.target.value)} />
      </td>
    })
  )
}

