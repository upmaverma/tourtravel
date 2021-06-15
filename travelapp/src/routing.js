import React, { createContext, useReducer } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Signup from "./component/navigationArea/signup";
import Login from "./component/navigationArea/login";
import Logout from "./component/navigationArea/logout";
import { initialState } from "../src/reducer/userReducer";
import reducer from "../src/reducer/userReducer";
import Home from "./component/homePage/home";
import TravelData from "./component/details/details";
import TravelInfo from "./component/information/info";
import Booking from "./component/booking/booking";
import DisplayBooking from "./component/booking/displaybooking";
import About from "./component/homePage/about";

export const UserContext = createContext();
const Routing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/details/:id" component={TravelData} />
          <Route path="/info/:id" component={TravelInfo} />
          <Route path="/booking/:id" component={Booking} />
          <Route path="/viewbooking" component={DisplayBooking} />
          <Route path="/about" component={About} />
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};
export default Routing;
