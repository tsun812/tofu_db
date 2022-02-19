import React from "react";
import "./Header.scss"
export default function Header(props) {
  console.log(props.url);
  return(
    <div className="container">
     <h2 className="title">{props.title}</h2>
     <img src={props.url} alt="banner-img" className="imgBanner"/>
    </div>
  );
}
