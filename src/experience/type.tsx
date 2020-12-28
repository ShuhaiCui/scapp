import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'

export interface Project {
  name: String,
  introduction: String,
  role: String
}

interface Experience {
  experience: Project
}


class ExperienceView extends React.Component<Project, Experience> {
  constructor(props: Project) {
    super(props);
    this.setState({experience:props});
  }

  public render() {
    return <View>
      <Text>
        "Project:"
        {this.state.experience.name}
        </Text>
      <ScrollView>
        "Introduction:"
        {this.state.experience.introduction}
      </ScrollView>
      <Text>
        "Role:"
        {this.state.experience.role}
      </Text>
    </View>
  }
}

export default ExperienceView;