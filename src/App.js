import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
  const [search, setSearch] = useState("");
  const [userStartedSearch, setUserStartedSearch] = useState(false);
  const [filterOption, setfilterOption] = useState("ToyName");

  const handleOnChange_search = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleOnClick_filter = (filterTerm) => {
    setfilterOption(filterTerm);
  };

  if (search !== "") {
    if (userStartedSearch == false) {
      setUserStartedSearch(true);
    }
  }

  return (
    <Router>
      <Navigation
        onChange={handleOnChange_search}
        search={search}
        onClick={handleOnClick_filter}
        filterOption={filterOption}
      />
      {/* Component below will change per page */}
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            userStartedSearch ? (
              <Search search={search} filterOption={filterOption} />
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/about"
          render={() =>
            userStartedSearch ? (
              <Search search={search} filterOption={filterOption} />
            ) : (
              <About />
            )
          }
        />
        <Route
          path="/search"
          render={() => <Search search={search} filterOption={filterOption} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
