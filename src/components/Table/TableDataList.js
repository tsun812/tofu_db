import React from 'react'
import TableDataListItem from './TableDataListItem'

export default function TableDataList({ tableDataArray, deleteRow, updateInputValue, saveInputValue, application_id, editStatus}) {
  return (
    Object.keys(tableDataArray).map((rowData, index) =>{  
      return <tr>
        <>{editStatus}</>
        <button onClick={() => deleteRow(tableDataArray[rowData].id, application_id )}>❌</button>
        <td>{index+1}</td>
        <TableDataListItem 
        rowData={tableDataArray[rowData].values} 
        updateInputValue={updateInputValue} 
        saveInputValue={saveInputValue} 
        application_id={application_id}/></tr>
    })
  )
}
