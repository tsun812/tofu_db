import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import "./Search.scss";

export default function Search({ selectedRecords, setFilteredRecords }) {
  const element = <FontAwesomeIcon icon={faSearch} />;
  const textInput = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    let searchString = textInput.current.value.toLowerCase();
    let regexE = RegExp("^" + searchString + "$");
    if (!searchString) {
      setFilteredRecords(selectedRecords);
    }
    const filteredRes = selectedRecords.filter((record) => {
      return (
        record.primary &&
        record.secondary &&
        (regexE.test(record.primary.toLowerCase()) ||
          regexE.test(record.secondary.toLowerCase()))
      );
    });
    setFilteredRecords(filteredRes);
  }
  return (
    <Form className="searchLayout" onSubmit={handleSubmit}>
      <Form.Control placeholder="Enter keywords" ref={textInput} />
      <Button type="submit">{element}</Button>
    </Form>
  );
}
