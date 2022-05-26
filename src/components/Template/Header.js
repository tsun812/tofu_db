import React from "react";
import "./Header.scss"
import Grid from "./Grid";
export default function Header(props) {
  return (
    <div className="titleAndImageContainer" >
      <h2 className="title">{props.title}</h2>
      {props.url && <img src={props.url} alt="banner-img" className="imgBanner" />}
    </div>
  );
}
