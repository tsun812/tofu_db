import React from "react";


export default function AppMenu({setMode}) {
  return (
    <>
      <h3></h3>
      <button class="btn btn-primary" onClick={() => setMode("Default")}>Back</button>
      <button class="btn btn-primary" onClick={() => setMode("AppDetails-Data")}>Data</button>
      <button class="btn btn-primary" onClick={() => setMode("AppDetails-Customize")}>Customization</button>
    </>);
}
