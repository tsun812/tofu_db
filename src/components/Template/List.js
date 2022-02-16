import React from "react"
import GridLayout from "react-grid-layout";
import "./GridItem.scss"

export default class Grid extends React.Component {
  
  render(){
  let fetchItem = [{key: "1", primary_field: "Strawberry", secondary_field: "Noun", position: 1}, {key: "2", primary_field: "Pinapple", secondary_field: "Noun", position: 2}, {key: "3", primary_field: "Apple", secondary_field: "Noun", position: 3}]
  let fetchItems = fetchItem.map(item => {
    let grid = {x:0, y:item.position, w:12, h:2}
    return (<div className="wrapper" key={item.key} data-grid={grid} >
    <div>
    {item.primary_field}
    </div>
    <div>
    {item.secondary_field}
    </div>
  </div>
  )})
    return (
      <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        {fetchItems}
      </GridLayout>
    )
    }
}