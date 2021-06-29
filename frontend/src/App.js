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

function App() {
  return (
    <div>
      {/* <SearchBar /> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/course/:id" exact>
            <CoursePage />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
