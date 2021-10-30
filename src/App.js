import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Component/Home/About/About";
import Banner from "./Component/Home/Banner/Banner";
import Contact from "./Component/Home/Contact/Contact";
import Footer from "./Component/Home/Footer/Footer";
import Header from "./Component/Home/Header/Header";
import Home from "./Component/Home/Home";
import Tour from "./Component/Home/Tour/Tour";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
