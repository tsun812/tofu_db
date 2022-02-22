import React from "react";
import "./Details.scss";
import DetailsListItem from "./DetailsListItem";

export default function DetailsList(props) {
  const valueList = props.selectedRecord.values ? props.selectedRecord.values:{};
  console.log('valueList')
  console.log(valueList)
  console.log('props.selectedRecordsDetails in DetailsList.js')
  console.log(props.selectedRecord)
  return (
    Object.keys(valueList).map((record) =>
          <DetailsListItem fieldlist={props.fieldlist} fieldID={valueList[record].field_id} fieldValue={valueList[record].field_value} />
    )
  )
}
