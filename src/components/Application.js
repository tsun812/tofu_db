import React, { useState } from "react";
import "components/Application.scss";
import Table from "./Table";
import useApplicationData from "hooks/useApplicationData";
import NavBarConfig from "./Template/NavBarConfig";
import Grid from "./Template/Grid";
import List from "./Template/List";
import AppList from "./AppList/AppList";
import Status from "./Table/Status";
import HorizontalNav from "./HorizontalNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFieldsById } from "helpers/selectors";
import Header from "./Template/Header";
import {
  BrowserRouter as Router,Link
} from "react-router-dom";

export default function Application() {
  const [mode, setMode] = useState("Data");
  const { getApplicationData, setConfig, state, setPositions, layouts, setPrimaryField, setSecondaryField, createNewRow, createNewColumn, deleteRow, deleteColumn, updateInputValue, saveInputValue, updateFieldValue, saveFieldValue, setApplication, createNewApplication, deleteApplication, updateApplicationData, saveApplicationData } = useApplicationData();

  //console.log("application.js", state)
  const tableHeaderArray = ((state.currentApplication.fields)) ? state.currentApplication.fields : [];
  const tableRecordArray = ((state.currentApplication.records)) ? state.currentApplication.records : [];
  const applicationID = state.selectedApplication
  const applicationName = state.currentApplication.application ? state.currentApplication.application.app_name : "";
  const applicationDescription = state.currentApplication.application ? state.currentApplication.application.description : "";
  const applicationBackgroundImage = state.currentApplication.application ? state.currentApplication.application.img_url : "";
  const applicationFontSize = state.currentApplication.application ? state.currentApplication.application.font : "";
  const applicationTheme = state.currentApplication.application ? state.currentApplication.application.display_theme : "";
  const primaryField = state.currentApplication.application ? state.currentApplication.application.primary_field : "";
  const secondaryField = state.currentApplication.application ? state.currentApplication.application.secondary_field : "";
  let fetchItem = [{ key: "1", primary_field: "Strawberry", secondary_field: "Noun", position: 1 }, { key: "2", primary_field: "Pinapple", secondary_field: "Noun", position: 2 }, { key: "3", primary_field: "Apple", secondary_field: "Noun", position: 3 }]
  let appId = parseInt(state.selectedApplication)
  let fields = getFieldsById(state, appId)
  //console.log(state.selectedApplication)
  //console.log(state.selectedRecords)
  // setPrimaryField("Building")
  return (
    <Router>
      <main className="layout">
        <section className="sidebar">
        <div   className="sidebar--centered" style={{ textDecoration: "none" }}>
          <Link to="/" className="sidebar__logo" style={{ textDecoration: "none" }} >
            TOFU DB
          <span className="sidebar__tofu">🧈</span>
          </Link>
        </div>
        {mode === "Data" && <AppList getApplicationData={getApplicationData} createNewApplication={createNewApplication} deleteApplication={deleteApplication} applications_array={state.applications} applicationName={applicationName} setApplication={setApplication}/>}
          {mode === "Customization" &&
            <NavBarConfig
              value={state.config}
              configs={state.configs}
              onChange={setConfig}
              fields={fields}
              setPrimaryField={setPrimaryField}
              setSecondaryField={setSecondaryField}
              updateApplicationData={updateApplicationData}
              applicationID={applicationID}
              appName={applicationName}
              appDescription={applicationDescription}
              appBackgroundImage={applicationBackgroundImage}
              appFontSize={applicationFontSize}
              applicationTheme={applicationTheme}
              applicationID={appId}
              saveApplicationData={saveApplicationData}
              primaryField={primaryField}
              secondaryField={secondaryField}
              deleteApplication={deleteApplication}
            />
          }
        </section>
        <div className="body">
          <section className="top-buttons">
          <HorizontalNav setMode={setMode}/>
          </section>
          {mode === "Data" &&
          <section className="table">
            <Table
              tableHeaderArray={tableHeaderArray}
              tableDataArray={tableRecordArray}
              deleteRow={deleteRow}
              deleteColumn={deleteColumn}
              getApplicationData={getApplicationData}
              createNewRow={createNewRow}
              createNewColumn={createNewColumn}
              application_id={applicationID}
              updateInputValue={updateInputValue}
              saveInputValue={saveInputValue}
              updateFieldValue={updateFieldValue}
              saveFieldValue={saveFieldValue}
              editStatus={state.editStatus}
              tableTitle={state.selectedApplicationName}
            />
            <button class="btn btn-primary" onClick={() => console.log(state)}>Check State</button>
            <button class="btn btn-primary" onClick={() => console.log(applicationID)}>Check applicationID</button>
          </section>
          }
          {mode === "Customization" &&
          <section>
            <Header 
            title={applicationName}
            url={applicationBackgroundImage} 
            description={applicationDescription} 
            application_id={applicationID}/>
            <Grid
              setPositions={setPositions}
              layouts={layouts}
              selectedRecords={state.selectedRecords}
              application_id={applicationID}
             />
          </section>
        
          }
        </div>

      </main>
    </Router>
  );
}
