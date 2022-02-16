import React from 'react'
import TableHeaderListItem from './TableHeaderListItem'

export default function TableHeaderList({ tableHeaderArray, deleteColumn }) {
  return (
    tableHeaderArray.map(header =>{
      return <TableHeaderListItem deleteColumn={deleteColumn} field_value={header['field_name']} key={header['id']} field_id={header['id']}/>
    })
  )
}
