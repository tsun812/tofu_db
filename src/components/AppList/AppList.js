import React from "react";
import AppListItem from "./AppListItem";
import "./AppList.scss";
import CreateDelete from "./CreateDelete";

export default function AppList(props) {
  const {
    getApplicationData,
    createNewApplication,
    applications_array,
    deleteApplication,
    applications,
    applicationName,
    setApplication,
    apps,
    app,
  } = props;
  
  const results = props.applications_array.map((application) => 
  <AppListItem
    className="app-name"
    key={application.id}
    appID={application.id}
    appName={application.app_name}
    getApplicationData={getApplicationData}
    deleteApplication={deleteApplication}
    selected={application.app_name === props.applicationName}
    setApplication={setApplication}
  />
);

  return (
    
    <div className="AppList" >
    <h2>My Apps</h2>
    {results}
    <CreateDelete createNewApplication={createNewApplication} />
    </div>
  );
}
