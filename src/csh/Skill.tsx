import {Component} from 'react'
import {Text, View} from 'react-native';

class Skill extends Component {
  constructor(prop: String) {
    super(prop);
    this.state = {};
  }

  public render(): any {
    return <View>
      <Text>"dummy"</Text>
    </View>;
  }

}

export default Skill;