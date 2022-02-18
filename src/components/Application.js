import React, { useEffect } from "react";
import "components/Application.scss";
import Table from "./Table";
import useApplicationData from "hooks/useApplicationData";
import NavBarConfig from "./Template/NavBarConfig";
import Grid from "./Template/Grid";
import List from "./Template/List";
import AppList from "./AppList/AppList";
import Status from "./Table/Status";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFieldsById } from "helpers/selectors";
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default function Application() {
  const { getApplicationData, setConfig, state,
     setLayouts, layouts, setPrimaryField, setSecondaryField, createNewRow, createNewColumn, deleteRow, deleteColumn, updateInputValue, saveInputValue, updateFieldValue, saveFieldValue, setApplication, createNewApplication, deleteApplication} = useApplicationData();
  console.log("application.js", state)
  const tableHeaderArray = ((state.currentApplication.fields)) ? state.currentApplication.fields : [];
  const tableRecordArray = ((state.currentApplication.records)) ? state.currentApplication.records : [];
  const applicationID = state.selectedApplication
  let fetchItem = [{ key: "1", primary_field: "Strawberry", secondary_field: "Noun", position: 1 }, { key: "2", primary_field: "Pinapple", secondary_field: "Noun", position: 2 }, { key: "3", primary_field: "Apple", secondary_field: "Noun", position: 3 }]
  let fields = getFieldsById(state, 1)
  //console.log(state.selectedApplication)
  //console.log(state.selectedRecords)
  // setPrimaryField("Building")
  return (
    <Router>
      <main className="layout">
        <section className="sidebar">
          <AppList getApplicationData={getApplicationData} createNewApplication={createNewApplication} deleteApplication={deleteApplication} applications_array={state.applications}/>
          <hr className="sidebar__separator sidebar--centered" />
          <NavBarConfig
            value={state.config}
            configs={state.configs}
            onChange={setConfig}
            fields={fields}
            setPrimaryField={setPrimaryField}
            setSecondaryField={setSecondaryField}
          />
        </section>
        <div className="body">
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
        <section className="schedule">
          <Grid
            setLayouts={setLayouts}
            layouts={layouts}
            selectedRecords={state.selectedRecords}
          />
        </section></div>
        
      </main>
    </Router>
  );
}
