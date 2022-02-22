import React from "react";
import "./ThemeCard.scss";
import ThemeCardList from "./ThemeCardList";
export default function ThemeCard(props) {
  return (
    <ThemeCardList selectedRecords={props.selectedRecords} filteredRecords={props.filteredRecords} setRecordDetails={props.setRecordDetails} setDetail={props.setDetail} className="card"/>
  )
}