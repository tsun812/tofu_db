import React from 'react'
import TableHeaderListItem from './TableHeaderListItem'

export default function TableHeaderList({ tableHeaderArray }) {
  return (
    tableHeaderArray.map(header =>{
      return <TableHeaderListItem field_value={header['field_name']} key={header['id']} field_id={header['id']}/>
    })
  )
}
