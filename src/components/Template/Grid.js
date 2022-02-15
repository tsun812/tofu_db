import React from "react"
import GridLayout from "react-grid-layout";
import GridItem from "./GridItem"
import "./GridItem.scss"

export default class Grid extends React.Component {
  
  render(){
  let fetchItem = [{key: "1", primary_field: "Strawberry", secondary_field: "Noun", position: 1}, {key: "2", primary_field: "Pinapple", secondary_field: "Noun", position: 2}, {key: "3", primary_field: "Apple", secondary_field: "Noun", position: 3}]
  let fetchItems = fetchItem.map(item => {
    return (<GridItem key={item.key} primary_field={item.primary_field} secondary_field={item.secondary_field} position={item.position} />
  )})
    return (
      <GridLayout className="layout" cols={6} rowHeight={30} width={1200}>
   
       <div className="wrapper" key={fetchItem[0].key} data-grid={{ x: 0, y: 0, w: 12, h: 2}} >
          <div>
          Strawberry
          </div>
          <div>
          Noun
          </div>
        </div>
        <div className="wrapper" key={fetchItem[1].key} data-grid={{ x: 0, y: 1, w: 12, h: 2}}>
          <div>
          Pinapple
          </div>
          <div>
          Noun
          </div>
        </div>
        <div className="wrapper" key={fetchItem[2].key} data-grid={{ x: 0, y: 2, w: 12 , h: 2}}>
          <div>
          Watermelon
          </div>
          <div>
          Noun
          </div>
        </div>
     
      </GridLayout>
    )
    }
}