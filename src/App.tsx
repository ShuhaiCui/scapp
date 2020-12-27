/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { 
  NativeRouter as Router,
  Switch,
  Link, 
  Route
} from "react-router-native";

import styles from "./StyleSheet";

import About from "./About";
import Client from "./client/Client";
import Server from "./server/Server";
import System from "./high/System";
import Skill from "./csh/Skill";
import {Routes} from "./Routing"

const App = () => {
  return (
    <View style = {styles.sectionContainer}>
      <Router>
          <Link to={Routes.About}>
            <Text style = {styles.sectionTitle}>About...</Text>
          </Link>
          <Link to={Routes.Client}>
            <Text style = {styles.sectionTitle}>Client...</Text>
          </Link>
          <Link to={Routes.Server}>
            <Text style = {styles.sectionTitle}>Server...</Text>
          </Link>
          <Link to={Routes.System}>
            <Text style = {styles.sectionTitle}>System...</Text>
          </Link>
          <Link to={Routes.Skill}>
            <Text style = {styles.sectionTitle}>Skill...</Text>
          </Link>
        <Switch>
          <Route exact path = {Routes.About}  component = {About} />
          <Route exact path = {Routes.Client} component = {Client} />
          <Route exact path = {Routes.Server} component = {Server} />
          <Route exact path = {Routes.System} component = {System} />
          <Route exact path = {Routes.Skill} component = {Skill} />
        </Switch>
      </Router>
    </View>
  );
};


export default App;
