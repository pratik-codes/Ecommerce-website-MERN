import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form
      className="justify-content-center my-4"
      onSubmit={submitHandler}
      inline
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products.."
        className="search"
      ></Form.Control>
      <Button type="submit" className="btn-sm search-btn mx-2 my-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
