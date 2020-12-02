import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import API from "../../utils/API";

const Search = ({ submitSearch, subjects, search, handleInputChange }) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleAddress">Search for Subject</Label>
        <input
          className="form-control"
          type="text"
          value={search}
          name="search"
          list="searches"
          id="search"
          placeholder="Search Subject"
          onChange={handleInputChange}
        />
        <datalist id="searches">
          {subjects.map((subject) => (
            <option value={subject._id} key={subject._id}>
              {subject._id}
            </option>
          ))}
        </datalist>
      </FormGroup>
      <Button onClick={submitSearch}> Submit</Button>
    </Form>
  );
};

export default Search;
