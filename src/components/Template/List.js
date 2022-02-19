import React from "react"
import "./GridItem.scss"
import "./List.scss"
export default function Grid(props){

 //console.log(layouts)
 let res = []
 if(props.selectedRecords){
 for (const [key, value] of Object.entries(props.selectedRecords)) {
    res.push(<li className="wrapper" key={key}>
    <div>
    {value.primary}
    </div>
    <div>
    {value.secondary}
    </div>
  </li>
  )}
 }
  //console.log(res)
    return (
     <ul>{res}</ul>
    )
    
}