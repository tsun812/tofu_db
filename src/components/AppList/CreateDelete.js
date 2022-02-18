import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CreateForm from "./CreateForm";
import useApplicationData from "hooks/useApplicationData";

export default function CreateDelete({ createNewApplication }) {
  const create = (
    <Link
      className="create"
      to="/app/create"
      style={{ textDecoration: "none" }}
    >
      Create a New app
    </Link>
  );
  return (
    <>
      <ul>{create}</ul>
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
