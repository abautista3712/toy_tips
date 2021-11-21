import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
  const [search, setSearch] = useState("");
  const [userStartedSearch, setUserStartedSearch] = useState(false);
  const [filterBy, setFilterBy] = useState("ToyName");

  const handleOnChange_search = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleOnClick_filter = (filterTerm) => {
    console.log(filterTerm);
    setFilterBy(filterTerm);
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
        filterBy={filterBy}
      />
      {/* Component below will change per page */}
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            userStartedSearch ? (
              <Search search={search} filterBy={filterBy} />
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/about"
          render={() =>
            userStartedSearch ? (
              <Search search={search} filterBy={filterBy} />
            ) : (
              <About />
            )
          }
        />
        <Route
          path="/search"
          render={() => <Search search={search} filterBy={filterBy} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
