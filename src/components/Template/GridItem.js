import React from "react"
import "./GridItem.scss"
export default class GridItem extends React.Component{
  render(){
    let position = this.props.position
    let grid = {x: 0, y: position, w: 12, h:2}
    return (
        <div  className="wrapper" key={this.props.key} data-grid={grid}>
          <div>
          {this.props.primary_field}
          </div>
          <div>
          {this.props.secondary_field}
          </div>
        </div>
    );
    }
}