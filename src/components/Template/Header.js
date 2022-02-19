import React from "react"
export default function Header (props) {
console.log(props.url)
  return(

      <img src={props.url} alt="banner-img"/>

  )
}