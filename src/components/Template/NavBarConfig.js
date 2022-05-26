import React from "react";
import "./NavBarConfig.scss"
import Field from "./Field";
import AppName from "./AppName";
import BackgroundImage from "./BackgroundImage";
import Theme from "./theme";
import Delete from "./Delete";
import { Form } from "react-bootstrap";

export default function NavBarConfig(props) {
  return(
    <div className="app-setting">
      <section className="sidebar__text sidebar--centered">
      <hr></hr>
      <h2>App Settings</h2>
      <hr></hr>
        <nav className="sidebar__menu">
        <Form>
          <Field key={1} fields={props.fields} name="Primary field" selected={props.primaryField} setPrimaryField={props.setPrimaryField} applicationID={props.applicationID} fieldsArray={props.fieldsArray}/>
          <Field key={2} fields={props.fields} name="Secondary field" selected={props.secondaryField} setSecondaryField={props.setSecondaryField} applicationID={props.applicationID} fieldsArray={props.fieldsArray}/>
          <Field key={3} fields={props.fields} name="Image field" selected={props.imgFieldName} setImageField={props.setImageField} applicationID={props.applicationID} fieldsArray={props.fieldsArray}/>
          <AppName appName={props.appName} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/>
          {/* <Description appDescription={props.appDescription} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/> */}
          <BackgroundImage appBackgroundImage={props.appBackgroundImage} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/>
          <Theme applicationTheme={props.applicationTheme} updateApplicationData={props.updateApplicationData} saveApplicationData={props.saveApplicationData} applicationID={props.applicationID}/>
          {/* <AppID applicationID={props.applicationID}/> */}
          <hr></hr>
          <Delete deleteApplication={props.deleteApplication} applicationID={props.applicationID} setMode={props.setMode}/>
        </Form>

        </nav>
        </section>
        </div>
    
  );
}