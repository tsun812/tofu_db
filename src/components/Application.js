import React, { useState } from "react";
import "components/Application.scss";
import Table from "./Table";
import useApplicationData from "hooks/useApplicationData";
import NavBarConfig from "./Template/NavBarConfig";
import Grid from "./Template/Grid";
import List from "./Template/List";
import AppList from "./AppList/AppList";
import Empty from "./Table/Empty";
import HorizontalNav from "./HorizontalNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFieldsById } from "helpers/selectors";
import Header from "./Template/Header";
import Sort from "./Template/Sort";
import Search from "./Template/Search";
import {
  BrowserRouter as Router,Link, Route, Routes
} from "react-router-dom";
import Login from "./login/Login";

export default function Application() {
  const [mode, setMode] = useState("login");
  const { getApplicationData, setConfig, state, setSortBy, setPositions, layouts, setPrimaryField, setSecondaryField, createNewRow, createNewColumn, deleteRow, deleteColumn, updateInputValue, saveInputValue, updateFieldValue, saveFieldValue, setApplication, createNewApplication, deleteApplication, updateApplicationData, saveApplicationData,setLogin } = useApplicationData();

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
  let isEmpty = (state.applications.length === 0)
  let isLoggedin = (state.login !== null)
  //console.log(state.selectedApplication)
  //console.log(state.selectedRecords)
  // setPrimaryField("Building")
  return (
    <Router>
      <main className="layout">
        <section className="sidebar">
        <div   className="sidebar--centered" style={{ textDecoration: "none" }}>
          <Link to="/" className="sidebar__logo" style={{ textDecoration: "none" }} >
            <h1>TOFU DB</h1>
          <span className="sidebar__tofu">🧈</span>
          </Link>
        </div>

        {/* <Link to="/login"
              style={{ textDecoration: "none"}}
              className="login">Login</Link>
      
        <Routes>
          <Route exact path="/login/" element={<Login setMode={setMode}/>}>
          </Route>
          </Routes> */}
        
        {mode === "Data" &&  <AppList getApplicationData={getApplicationData} createNewApplication={createNewApplication} deleteApplication={deleteApplication} applications_array={state.applications} applicationName={applicationName} setApplication={setApplication} applicationID={applicationID}/>}
        {mode === "login" &&  <Login setMode={setMode}/>}
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
            setMode={setMode}
            mode={mode}
            />
          };
            <button className="btn btn-primary" onClick={() => console.log(state)}>Check State</button>
            <button className="btn btn-primary" onClick={() => console.log(applicationID)}>Check applicationID</button>
            <button className="btn btn-primary" onClick={() => console.log(mode)}>Check Mode</button>
            <button className="btn btn-primary" onClick={() => console.log(state.selectedRecords)}>Check selectedRecords</button>
        </section>
        {isEmpty === true && <Empty />}
        {isEmpty === false &&
        <div className="body">
          {mode !== "login" &&
          <section className="top-buttons">
          <HorizontalNav setMode={setMode} mode={mode}/>
          </section>}
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
          </section>
          }
          {mode === "Customization" &&
          <section>
            <Header 
            title={applicationName}
            url={applicationBackgroundImage} 
            description={applicationDescription} 
            application_id={applicationID}
            />
            <section className="searchsort">
            <Sort  
            setSortBy={setSortBy} 
            application_id={applicationID}
            />
            <Search />
            </section>
            <List
              layouts={layouts}
              selectedRecords={state.selectedRecords}
              application_id={applicationID}
              />
          </section>
        
      }
        </div>
}
      </main>
      </Router>

  );
}
