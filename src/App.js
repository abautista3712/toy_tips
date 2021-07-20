import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navigation />
      {/* Component below will change per page */}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      {/* --- */}
      <Footer />
    </Router>
  );
}

export default App;
