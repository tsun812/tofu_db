import React from "react";
import "./ThemeCard.scss";
import ThemeCardList from "./ThemeCardList";
export default function ThemeCard(props) {
  return (
    <ThemeCardList selectedRecords={props.selectedRecords} filteredRecords={props.filteredRecords} className="card"/>
  )
}