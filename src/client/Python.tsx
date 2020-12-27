import {Component} from 'react'
import {Text, View} from 'react-native';
import {NativeRouter as Router, Route, Link, Switch} from 'react-router-native'

class Python extends Component {
  constructor(prop: String) {
    super(prop);
    this.state = {};
  }

  public render(){
    return <View>
      <Router>
        <Link to=""> </Link>
      </Router>
    </View>;
  }

}

export default Python;