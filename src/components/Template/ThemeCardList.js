import React from "react";
import "./ThemeCard.scss";
import ThemeCardListItem from "./ThemeCardListItem";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function ThemeCardList(props) {
  let recordsRender;
  if (
    Array.isArray(props.filteredRecords) &&
    props.filteredRecords.length > 0
  ) {
    recordsRender = props.filteredRecords;
  } else {
    recordsRender = props.selectedRecords;
  }
  return (
    <Row xs={1} md={3} className="g-5">
      {recordsRender&&
        recordsRender.map((item) => {
          return (
            <Col>
              <ThemeCardListItem
                primary={item.primary}
                secondary={item.secondary}
                setRecordDetails={props.setRecordDetails}
                recordID={item.id}
                setDetail={props.setDetail}
                recordData={props.recordArray[item.id]}
                selectedImageFieldID={props.selectedImageFieldID}
              />
            </Col>
          );
        })}
    </Row>
  );
}
