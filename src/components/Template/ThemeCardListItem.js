import React from "react";
import "./ThemeCardListItem.scss";
import { Card, Button } from "react-bootstrap";
export default function ThemeCardListItem(props) {
  const list = props.recordData.values
  const result = Object.keys(list).filter((value) => 
    //compare and find the selected img field id
    // using == instead of === on purpose do not remove
    list[value]['field_id'] == props.selectedImageFieldID
  )
  const valueID = result[0];
  let imgURL;
  if (result.length !== 0) {
   imgURL = list[valueID]['field_value']
  }
  // if url is empty, then show default image
  const finalImgURL = imgURL === "" ? "/images/logo4.png" : imgURL
  return (
    <Card>
      <Card.Img variant="top" src={finalImgURL} className="logo" />
      <Card.Body>
        <Card.Title>{props.primary}</Card.Title>
        <Card.Text>
         {props.secondary}
        </Card.Text>
        <Button variant="primary" onClick={() => {props.setRecordDetails(props.recordID); props.setDetail('show');}}>Details</Button>
      </Card.Body>
    </Card>
  )
}