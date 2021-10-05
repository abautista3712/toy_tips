import React, { useState, useEffect } from "react";
import ToySearchCard from "../components/ToySearchCard";
import Axios from "axios";

const Search = (props) => {
  const [count, setCount] = useState(0);
  const [toyName, setToyName] = useState("");
  const [toyNameList, setToyNameList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/get").then((response) => {
      setToyNameList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {toyNameList.map((val) => {
        return <h1>Toy Name: {val.ToyName} </h1>;
      })}
      {/* <ToySearchCard /> */}
      {/* <ToySearchCard />
      <ToySearchCard />
      <ToySearchCard />
      <ToySearchCard /> */}
    </div>
  );
};

export default Search;
