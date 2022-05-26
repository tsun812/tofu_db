import React from "react";
import "./ThemeTable.scss"
export default function ThemeTableHeader({ tableHeaderArray, primaryField, secondaryField }) {
  return (
    <>
      <th>{primaryField}</th>
      <th>{secondaryField}</th>
    </>
  )
}