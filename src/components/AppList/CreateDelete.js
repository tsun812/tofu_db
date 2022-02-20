import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CreateForm from "./CreateForm";
import "./CreateDelete.scss";
import useApplicationData from "hooks/useApplicationData";
import { Button } from "react-bootstrap";

export default function CreateDelete({ createNewApplication }) {
  const create = (
  <Button className="create"><Link
      className="create-font"
      to="/app/create"
      style={{ textDecoration: "none"}}
    >
      Create a New app
    </Link></Button>  
  );
  return (
    <>
      {create}
      <Routes>
        <Route path="/" element={<s />} />
        <Route
          path="/app/create"
          element={<CreateForm createNewApplication={createNewApplication} />}
        />
      </Routes>
    </>
  );
}
