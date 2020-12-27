import React from 'react'
import { View, Text, StyleSheet, EventSubscriptionVendor } from 'react-native'

import ExperienceView, { Project } from '../type'

interface IProps {
  projects: Project[]
}

export const client_projects: Project[] = [
  {
    name: "Optimus",
    introduction: "This is a client side system project, which:" +
                   "controls Solar Panel Inverter" +
                   "captures metrics and upload to web server for AI processing, and display",
    role: "lead, design and implement"
  },
  {
    name: "FanDan Restaurant Management",
    introduction: "web pages manages restaurant's menu, drinks etc",
    role: "design and development"
  },
  {
    name: "FortiClient",
    introduction: "Fortinet Windows firewall system windows client development, includes windows NDIS driver, " +
                  "library, and application development; Fortinet windows web fiter which proxies web request to" + 
                  "provide network scurity includes socket client, windows filter driver development etc.; and Fortimail" +
                  " which provides email security",
    role: "lead, design and development"
  }

]

class ClientExperience extends React.Component<IProps> {
  constructor(props: IProps){
    super(props);
    this.setState(client_projects);
  }

  public render() {
    const listViews = this.props.projects.map((p) => <ExperienceView name={p.name} introduction={p.introduction} role={p.role}></ExperienceView>);

    return <View>
     {listViews}
    </View>;
  }

}

export default ClientExperience;
