import React from 'react'

export default function TableDataListItem({ rowData }) {
  console.log(rowData)
  return (
    rowData.map(value =>{
      return <td data-field-id={value.field_id} data-record-id={value.record_id} data-value-id={value.id}>{value.field_value}</td>
    })
  )
}
