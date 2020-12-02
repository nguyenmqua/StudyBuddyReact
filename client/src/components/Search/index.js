import React from "react"
import {Form, FormGroup, Label, Input, Button} from "reactstrap"
import API from "../../utils/API"
const Search = ({submitSearch, setSearch}) => {

    return(
        <Form>
            <FormGroup>
                <Label for="exampleAddress">Search for Subject</Label>
                <Input type="text" name="search" id="Search" placeholder="Search Subject" onChange={(e)=>setSearch(e.target.value)}/>
            </FormGroup>
            <Button onClick={submitSearch}> Submit</Button>
        </Form>
    )
}

export default Search