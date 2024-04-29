import React, { useState, useEffect } from 'react';

import "./App.css";
import Navbar from "./components/Navbar";
import Leaguebar from "./components/Leaguebar"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import Home from "./components/pages";
import About from "./components/pages/about";
import Events from "./components/pages/events";
import MatchCenter from "./components/pages/matchcenter";
import Blogs from "./components/pages/blogs";
import SignUp from "./components/pages/signup";
import MatchListBar from './components/MatchListBar';

function App({ signOut,user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [league, setLeague] = useState([]);
  //setIsLoading(true);
  console.log(user);
    useEffect(() => {
      fetch('https://cricfan.s3.amazonaws.com/league.json')
         .then((response) => response.json())
         .then((data) => {
            //console.log("data=====" + data);
            setLeague(data);
            setIsLoading(false);
         })
         .catch((err) => {
          setIsLoading(false);
            console.log(err.message);
         });
   }, []);
  
  return (

    <View className="App">

    <div>
      {isLoading ? "loading" :
      <Router>
          <Navbar signOut={signOut}  loggedUser={user}/>
          <Leaguebar leagueConfig={league} loggedUser={user}/>
          <MatchListBar leagueConfig={league} loggedUser={user}/>
          
          
         
      </Router> }
    </div>
    
  </View>
    

  );
  /*return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );*/
  
}

export default withAuthenticator(App);


