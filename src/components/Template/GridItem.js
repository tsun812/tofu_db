import React from "react"
import "./GridItem.scss"
export default class GridItem extends React.Component{
  render(){
    return (
        <div key={this.props.key} data-grid={{ x: this.props.position * 2, y: 0, w: 12, h: 2}}>
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