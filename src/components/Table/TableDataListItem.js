import React from 'react'

export default function TableDataListItem({ rowData }) {
  return (
    rowData.map(value =>{
      return <td>{value}</td>
    })
  )
}
