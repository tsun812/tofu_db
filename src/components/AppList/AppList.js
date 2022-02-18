import React from 'react'
import AppListItem from './AppListItem'
import "./AppList.scss"
import CreateDelete from './CreateDelete'

export default function AppList({getApplicationData,createNewApplication, applications_array, deleteApplication}) {
  return (

    <div className='AppList'>
      <>
      <AppListItem getApplicationData={getApplicationData} applications_array={applications_array} deleteApplication={deleteApplication}/>
      <CreateDelete createNewApplication={createNewApplication}/>
      </>
      </div>
  )
}
