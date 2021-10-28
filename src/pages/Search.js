import React, { useState, useEffect } from "react";
import ToySearchCard from "../components/ToySearchCard";
import Axios from "axios";

const baseURL = "http://localhost:8080/api/get";

const Search = (props) => {
  const [toyData, setToyData] = useState("");

  useEffect(() => {
    getToyData();
  }, []);

  const getToyData = () => {
    Axios.get(baseURL)
      .then((response) => {
        setToyData(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <ToySearchCard toyData={toyData} search={props.search} />
    </div>
  );
};

export default Search;
