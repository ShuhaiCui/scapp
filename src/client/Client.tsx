import React, {Component} from 'react'
import {Text, View} from 'react-native';
import {NativeRouter as Router, Route, Link, Switch, matchPath} from 'react-router-native'
import ClientExperience, {client_projects} from "../experience/client"

class Client extends Component {
  constructor(prop: String) {
    super(prop);
    this.state = client_projects;
  }

  public render(){
    return <ClientExperience projects={client_projects}></ClientExperience>;
    // return <View>
    //   <Text>
    //     Redirect to Client...
    //   </Text>
    //   <Router>
    //     <Link to={`${matchPath}/client}`}>Client</Link>
    //   </Router>
    //   <Route path={`${matchPath}/client}`} component={ () => <ClientExperience projects={client_projects}></ClientExperience>}>
    //   </Route>
    // </View>;
  }

}

export default Client;