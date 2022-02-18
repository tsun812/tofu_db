import React from "react"
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { useState } from "react";
import "./GridItem.scss"

export default function Grid(props){
 
      
 
  let fetchItem = [{key: "1", primary_field: "Strawberry", secondary_field: "Noun", position: 1}, {key: "2", primary_field: "Pinapple", secondary_field: "Noun", position: 2}, {key: "3", primary_field: "Apple", secondary_field: "Noun", position: 3}]
  let initialLayouts = {
    lg: [
      { id: '1', x: 1, y: 0, w: 12, h: 2 },
      { id: '2', x: 2, y: 0, w: 12, h: 2 },
      { id: '3', x: 3, y: 0, w: 12, h: 2 },
    ],
  };   
  //const [layouts, setLayouts] = useState(initialLayouts);
  const onLayoutChange = (_, allLayouts) => {
    //props.setLayouts(allLayouts.md)
    allLayouts.md.forEach(item=>{
      let yAxis = item['y']
      let recordId = parseInt(item['i'])
      
      props.setPositions(recordId, yAxis)
   })
  
  };

 //console.log(layouts)
 let res = []
 for (const [key, value] of Object.entries(props.selectedRecords)) {
  //let fetchItems = fetchItem.map(item => {
    let grid = {x:0, y:value.position, w:12, h:2}
    //console.log(value)
    res.push(<div className="wrapper" key={key} data-grid={grid} >
    <div>
    {value.primary}
    </div>
    <div>
    {value.secondary}
    </div>
  </div>
  )}
  //console.log(res)
    return (
      <ResponsiveGridLayout className="layout" layouts={props.layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}  rowHeight={30} width={1200} onLayoutChange={onLayoutChange}>
        {res}
      </ResponsiveGridLayout>
    )
    
}