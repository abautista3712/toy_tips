import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <div>Body</div>
      <Footer />
    </Router>
  );
}

export default App;
