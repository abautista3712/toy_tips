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

  const handleOnChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  if (search == "") {
    // if (userStartedSearch == false) {
    //   setUserStartedSearch(true);
    // }
  } else if (userStartedSearch == false) {
    setUserStartedSearch(true);
  }

  return (
    <Router>
      <Navigation onChange={handleOnChange} search={search} />
      {/* Component below will change per page */}
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            userStartedSearch ? <Search search={search} /> : <Landing />
          }
        />
        <Route
          path="/about"
          render={() =>
            userStartedSearch ? <Search search={search} /> : <About />
          }
        />
        <Route
          path="/search"
          render={() =>
            userStartedSearch ? (
              <Search search={search} />
            ) : (
              <Search search={search} />
            )
          }
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
