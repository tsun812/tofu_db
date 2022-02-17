import React from 'react'
import AppListItem from './AppListItem'
import "./AppList.scss"
import CreateDelete from './CreateDelete'

export default function AppList({getApplicationData}) {
  return (

    <div className='AppList'>
      <>
      <AppListItem getApplicationData={getApplicationData}/>
      <CreateDelete/>
      </>
      </div>
  )
}
