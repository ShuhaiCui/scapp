

import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { NativeRouter as Router, Route, Link, Switch} from "react-router-native";

import App from "./App"
import Client from "./client/Client"
// import Routes from "./Routing"

interface Props {
  content: String
}
interface State {
  profile: String
}

const aboutCsh: String = "Introuduction About Cui, Shu Hai: \
C: Client side skills, \
S: Server side skills, \
H: High level architecture skills";

class Abcout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            profile: aboutCsh
        }
    }
    // componentWillMount() {
    //     // TODO
    //   }
    //   componentDidUpdate() {
    //     // TODO
    //   }
    //   componentWillUpdate() {
    //     // TODO
    //   }

    public render () {
        return <View>
            <View  >
                <Text style={styles.text} >{this.state.profile} </Text>
            <Link
                to= {"/home"}
                className="NavLinkItem">
                <Text>   
                    "Go back home"
                </Text>
            </Link>
            </View>
            {/* <Router> */}
                <Switch>
                <Route
                    exact
                    path = {"/home"}
                    component = {App}
                />
                </Switch>
            {/* </Router> */}
        </View>

    }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'rgba(0, 255, 255, 0.85)',
  },
  NavLinkItem: {
    backgroundColor: 'rgba(0, 255, 255, 0.85)',
  },
    NavLinkItem_selected: {
      backgroundColor: 'rgba(255, 0, 255, 0.85)',
    }
});

export default Abcout

// import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

// const routing = (
//     <Router>
//         <Header />
//         <div className="page">
//             <Switch>
//                 <Route exact path="/" component={App} />
//                 <Route exact path="/SubMenu1" component={SubMenu1Page} />
//                 <Route exact path="/SubMenu2" component={SubMenu2Page} />
//             </Switch>
//         </div>
//     </Router>
// )
// ReactDOM.render(routing, document.getElementById('root'))
