import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Navigation />
      <div>Body</div>
      <Landing />
      <Footer />
    </Router>
  );
}

export default App;
