import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
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
import Teams from "./components/pages/team";
import Blogs from "./components/pages/blogs";
import SignUp from "./components/pages/signup";

function App({ signOut }) {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: '92.12',
      date: new Date(2023, 10, 11),
    },
    {
      id: 'e12',
      title: 'Towel Paper',
      amount: '12.12',
      date: new Date(2023, 10, 11),
    },
    {
      id: 'e13',
      title: 'face pack ',
      amount: '100.12',
      date: new Date(2023, 10, 11),
    },
    {
      id: 'e14',
      title: 'toothpaste ',
      amount: '7.10',
      date: new Date(2023, 10, 16),
    },
  ]
  return (
    <View className="App">

  
    <Router>
    <Navbar signOut={signOut}/>
    <Routes>
        <Route path="/matchcenter" element={<MatchCenter />} />
        <Route path="/about" element={<About />} />
        <Route
            path="/events"
            element={<Events />}
        />
        <Route
            path="/annual"
            element={<MatchCenter />}
        />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        
    </Routes>
</Router>
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


