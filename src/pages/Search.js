import React, { useState, useEffect, Suspense, lazy } from "react";
import Axios from "axios";
import ToySearchCard from "../components/ToySearchCard";

// const ToySearchCard = React.lazy(() => import("../components/ToySearchCard"));
const baseURL = "/api/get";

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
      {/* <Suspense fallback={<h3>Loading... but from Search component</h3>}> */}
      <ToySearchCard toyData={toyData} search={props.search} />
      {/* </Suspense> */}
    </div>
  );
};

export default Search;
