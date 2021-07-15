import "./App.css";
import { useEffect, useState } from "react";
import Homepage from "./Pages/homepage/Homepage";
import { makeStyles } from "@material-ui/core";
import axios from "./axios";
import CoursePage from "./Pages/coursePage/CoursePage.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Header from "./components/header/Header";
import AboutUs from "./Pages/aboutUs/AboutUs.js";
import SearchBar from "./components/searchBar/SearchBar";
import PrivacyPolicy from "./Pages/privacyPolicy/PrivacyPolicy";
import TermAndCondition from "./Pages/t&c/TermAndCondition";
import Footer from "./components/footer/Footer";
import ContactUs from "./Pages/contactUs/ContactUs";
import AddACourse from "./Pages/AddACourse/AddaCourse";
import TopStripe from "./components/TopStripe";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  card: {
    textAlign: "-webkit-center",
  },
});
// console.log("&&");

function App() {
  return (
    <div>
      {/* <SearchBar /> */}
      <Router>
        <Route path="/" exact>
          <TopStripe />
        </Route>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/course/:id" exact>
            <CoursePage />
          </Route>
          <Route path="/about" exact>
            <AboutUs />
            <Footer />
          </Route>
          <Route path="/privacy-policy" exact>
            <PrivacyPolicy />
            <Footer />
          </Route>
          <Route path="/term-and-condition" exact>
            <TermAndCondition />
            <Footer />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
            <Footer />
          </Route>
          <Route path="/add-a-course">
            <AddACourse />
            <Footer />
          </Route>
          <Route path="*">
            <ErrorPage />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
