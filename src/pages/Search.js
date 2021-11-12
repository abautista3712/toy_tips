import React, { useState, useEffect, Suspense, lazy } from "react";
import Axios from "axios";

const ToySearchCard = React.lazy(() => import("../components/ToySearchCard"));
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
      <Suspense fallback={<h3>Loading...</h3>}>
        <ToySearchCard toyData={toyData} search={props.search} />
      </Suspense>
    </div>
  );
};

export default Search;
