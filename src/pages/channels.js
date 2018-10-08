import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import withFirebaseAuth from "react-auth-firebase";
import "./channels.css";
import firebase from "./firebase";
import YouTube from 'react-youtube';
import Header from "./components/header/header";
import News from "./components/player/playerNews";
import Entertainment from "./components/player/playerEntertainment";
import Channels from "./components/channels/channels";



const BasicExample = () => (


  <Router>
    <div>
    <Header/>

      <Route exact path="/" component={channelsWindow} />
      <Route path="/news" component={newsWindow} />
      <Route path="/entertainment" component={entertainmentWindow} />
    </div>
  </Router>
);


const channelsWindow = () => (
  <div>
<Channels/>
  </div>
);

const newsWindow = () => (
  <div>
<News/>
  </div>
);

const entertainmentWindow = () => (
  <div>
<Entertainment/>
  </div>
);

export default BasicExample;
