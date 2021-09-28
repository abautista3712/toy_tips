import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* Component below will change per page */}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
      {/* --- */}
      <Footer />
    </HashRouter>
  );
}

export default App;
