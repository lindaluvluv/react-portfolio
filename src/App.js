import "./App.css";
import {
  Switch,
  Redirect,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
          <hr />
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/aboutme" />
            </Route>
            <Route path="/aboutme" exact>
              <AboutMe />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
