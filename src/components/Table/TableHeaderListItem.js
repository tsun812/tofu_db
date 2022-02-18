import React from "react";
import Button from "react-bootstrap/Button";
import {
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export default function TableHeaderListItem({
  application_id,
  field_value,
  field_id,
  deleteColumn,
  updateFieldValue,
  saveFieldValue,
}) {
  // console.log(`field_id =>${field_id}`)
  return (
    <th>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={field_value}
          onChange={(event) => updateFieldValue(field_id, event.target.value)}
          onBlur={(event) =>
            saveFieldValue(application_id, field_id, event.target.value)
          }
          className="form-control"
          aria-label="Text input with dropdown button"
        />

        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-2"
          align="end"
          onSelect={() => deleteColumn(field_id, application_id)}
        >
          <Dropdown.Item>Delete</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </th>
  );
}
