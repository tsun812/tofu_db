import React, { useState } from "react";
import "components/Application.scss";
import Table from "./Table";
import useApplicationData from "hooks/useApplicationData";
import NavBarConfig from "./Template/NavBarConfig";
import List from "./Template/List";
import AppList from "./AppList/AppList";
import Empty from "./Table/Empty";
import HorizontalNav from "./HorizontalNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFieldsById } from "helpers/selectors";
import Header from "./Template/Header";
import Sort from "./Template/Sort";
import Search from "./Template/Search";
import { BrowserRouter as Router, Link} from "react-router-dom";
import Login from "./login/Login";
import ThemeTable from "./Template/ThemeTable";

export default function Application() {
  const [mode, setMode] = useState("login");
  const {
    getApplicationData,
    setConfig,
    setFilteredRecords,
    state,
    setSortBy,
    layouts,
    setPrimaryField,
    setSecondaryField,
    createNewRow,
    createNewColumn,
    deleteRow,
    deleteColumn,
    updateInputValue,
    saveInputValue,
    updateFieldValue,
    saveFieldValue,
    setApplication,
    createNewApplication,
    deleteApplication,
    updateApplicationData,
    saveApplicationData,
  } = useApplicationData();

  //console.log("application.js", state)
  const tableHeaderArray = state.currentApplication.fields
    ? state.currentApplication.fields
    : [];
  const tableRecordArray = state.currentApplication.records
    ? state.currentApplication.records
    : [];
  const applicationID = state.selectedApplication;
  const applicationName = state.currentApplication.application
    ? state.currentApplication.application.app_name
    : "";
  const applicationDescription = state.currentApplication.application
    ? state.currentApplication.application.description
    : "";
  const applicationBackgroundImage = state.currentApplication.application
    ? state.currentApplication.application.img_url
    : "";
  const applicationFontSize = state.currentApplication.application
    ? state.currentApplication.application.font
    : "";
  const applicationTheme = state.currentApplication.application
    ? state.currentApplication.application.display_theme
    : "";
  const primaryField = state.currentApplication.application
    ? state.currentApplication.application.primary_field
    : "";
  const secondaryField = state.currentApplication.application
    ? state.currentApplication.application.secondary_field
    : "";
  let appId = parseInt(state.selectedApplication);
  let fields = getFieldsById(state, appId);
  let isEmpty = state.applications.length === 0;

  return (
    <Router>
      <main className="layout">
        <section className="sidebar">
          <div className="sidebar--centered" style={{ textDecoration: "none" }}>
            <Link
              to="/"
              className="sidebar__logo"
              style={{ textDecoration: "none" }}
            >
            
              <span className="sidebar__tofu"><img className="tofu-pic" src="/images/logo4.png" /></span>
            </Link>
          </div>
          {mode === "Data" && (
            <AppList
              getApplicationData={getApplicationData}
              createNewApplication={createNewApplication}
              deleteApplication={deleteApplication}
              applications_array={state.applications}
              applicationName={applicationName}
              setApplication={setApplication}
              applicationID={applicationID}
            />
          )}
          {mode === "Customization" && (
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
              saveApplicationData={saveApplicationData}
              primaryField={primaryField}
              secondaryField={secondaryField}
              deleteApplication={deleteApplication}
              setMode={setMode}
              mode={mode}
            />
          )}
          ;
          <button
            className="btn btn-primary"
            onClick={() => console.log(state)}
          >
            Check State
          </button>
          <button
            className="btn btn-primary"
            onClick={() => console.log(applicationID)}
          >
            Check applicationID
          </button>
          <button className="btn btn-primary" onClick={() => console.log(mode)}>
            Check Mode
          </button>
          <button
            className="btn btn-primary"
            onClick={() => console.log(state.selectedRecords)}
          >
            Check selectedRecords
          </button>
        </section>
        {isEmpty === true && <Empty />}
        {isEmpty === false && (
          <div className="body">
            {mode !== "login" && (
              <section className="top-buttons">
                <HorizontalNav setMode={setMode} mode={mode} />
              </section>
            )}

            {mode === "Data" && (
              <div className="tableContainer">
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
              </div>
            )}
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
            <Search selectedRecords={state.selectedRecords} setFilteredRecords={setFilteredRecords}/>
            </section>
            <List
              layouts={layouts}
              filteredRecords={state.filteredRecords}
              selectedRecords={state.selectedRecords}
              application_id={applicationID}
              />
              <ThemeTable 
              tableHeaderArray={tableHeaderArray}
              tableDataArray={tableRecordArray}
              filteredRecords={state.filteredRecords}
              selectedRecords={state.selectedRecords}
              application_id={applicationID}
              />
          </section>
          }
            {mode === "login" && <Login setMode={setMode} />}
          </div>
        )}
      </main>
      </Router>

  );
}
