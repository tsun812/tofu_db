import React from 'react'
import AppListItem from './AppListItem'
import "./AppList.scss"
import CreateDelete from './CreateDelete'

export default function AppList({getApplicationData,createNewApplication}) {
  return (

    <div className='AppList'>
      <>
      <AppListItem getApplicationData={getApplicationData}/>
      <CreateDelete createNewApplication={createNewApplication}/>
      </>
      </div>
  )
}
