import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CreateForm from "./CreateForm";
import "./CreateDelete.scss";
import useApplicationData from "hooks/useApplicationData";
import { Button } from "react-bootstrap";

export default function CreateDelete({ createNewApplication }) {
  const create = (
  <Link
      className="create-font"
      to="/app/create"
      style={{ textDecoration: "none"}}
    >
      <Button className="create">
      Create a New app
      </Button>
    </Link>
  );
  return (
    <>
    <hr></hr>
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
