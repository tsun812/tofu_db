import React from "react"
import "./GridItem.scss"
import "./List.scss"
export default function List(props){

 //console.log(layouts)
  let res = props.selectedRecords.map((element, index)=>{
   return(<li className="wrapper" key={index}>
    <div>
    {element.primary}
    </div>
    <div>
    {element.secondary}
    </div>
  </li>
  )}
 )
  //console.log(res)
    return (
     props.selectedRecords && <ul>{res}</ul>
    )
    
}