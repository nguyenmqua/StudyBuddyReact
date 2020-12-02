import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import API from "../../utils/API";

const Search = ({ submitSearch, subjects, search, handleInputChange }) => {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search Subject</label>
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
            <option value={subject.subject} key={subject._id}>
              {subject.subject}
            </option>
          ))}
        </datalist>
      <Button onClick={submitSearch}> Submit</Button>
      </div>
    </form>
  );
};

export default Search;
