import React from "react";
import AppListItem from "./AppListItem";
import "./AppList.scss";
import CreateDelete from "./CreateDelete";

export default function AppList(props) {
  const {
    getApplicationData,
    createNewApplication,
    deleteApplication,
    setApplication,
    applications_array
  } = props;
  console.log('props.applications_array = ', applications_array)
  const results = applications_array.map((application) => 
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
    <section className="myAppsTitleContainer">
    <hr></hr>
    <h2 className="myAppsTitle">My Apps</h2>
    <hr></hr>
    </section>
    {results}
    <CreateDelete createNewApplication={createNewApplication} />
    </div>
  );
}
