import React from 'react'
import { Dropdown, DropdownButton, InputGroup, FormControl, Form } from "react-bootstrap";

export default function TableHeaderListItem({ application_id, field_value, field_type, field_id, deleteColumn, updateFieldValue, saveFieldValue }) {
  // console.log(`field_id =>${field_id}`)
  console.log(`field_type->${field_type}`)
  return (
    <th>
      <InputGroup className="tableHeaderField">
        <FormControl type="text"
          value={field_value}
          onChange={(event) => updateFieldValue(1, field_id, event.target.value)}
          onBlur={(event) => saveFieldValue(application_id, field_id, event.target.value, null)}
          aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-2"
          align="end"
          onSelect={() => deleteColumn(field_id, application_id)}
        >
          <Dropdown.Item >Delete</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      <InputGroup className="tableHeaderField">
        <Form.Select aria-label="Default select example" value={field_type} onChange={(event) => {updateFieldValue(2, field_id, event.target.value);saveFieldValue(application_id, field_id, null ,event.target.value)}}>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </Form.Select>
      </InputGroup>
    </th>

  )
}

