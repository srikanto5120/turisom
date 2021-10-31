import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Component/Home/About/About";

import Booking from "./Component/Home/Booking/Booking";
import BookingInformation from "./Component/Home/BookingInformation/BookingInformation";

import Footer from "./Component/Home/Footer/Footer";
import Header from "./Component/Home/Header/Header";
import Home from "./Component/Home/Home";
import Room from "./Component/Home/Hotel/Room/Room";
import PrivateRoute from "./Component/Home/PrivateRoute/PrivateRoute";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/tour/booking/:id">
              <Booking></Booking>
            </Route>
            <Route exact path="/hotel/rom">
              <Room></Room>
            </Route>
            <PrivateRoute exact path="/hotel/rom/book">
              <BookingInformation></BookingInformation>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
