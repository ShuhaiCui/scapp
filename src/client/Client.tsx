import React, {Component} from 'react'
import {Text, View} from 'react-native';
import {NativeRouter as Router, Route, Link, Switch, matchPath} from 'react-router-native'
import App from "../App"
import ClientExperience, {client_projects} from "../experience/client"
import ExperienceView from "../experience/type"

import {Routes} from "../Routing"

class Client extends Component {
  constructor(prop: String) {
    super(prop);
    this.state = {client_projects};
  }

  public render(){
    let project = client_projects[0];
    // const listViews = client_projects.map((p) => <ExperienceView name={p.name} introduction={p.introduction} role={p.role}></ExperienceView>);

    return <View>
      {/* {listViews} */}
      <Text>
        {project.name}
      </Text>
      <Text>
        {project.introduction}
      </Text>
      <Text>
        {project.role}
      </Text>
      {/* <Router>
        <Link to={Routes.APP} >Home  </Link>
        <Route path={Routes.APP} component={App}>
        </Route>
      </Router> */}
    </View>;
  }

}

export default Client;