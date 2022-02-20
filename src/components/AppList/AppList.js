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
    selected={application.id === props.applicationID}
    setApplication={setApplication}
  />
);

  return (
    
    <div className="AppList" >
    <section className="myAppstitle">
    <h2>My Apps</h2>
    <hr></hr>
    </section>
    {results}
    <CreateDelete createNewApplication={createNewApplication} />
    </div>
  );
}
