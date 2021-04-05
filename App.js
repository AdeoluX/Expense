/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * all Images are gotten from FlatIcons
 * @format
 * @flow strict-local
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
import Splash from './component/Splash';
import Login from './component/screens/Login';
import Home from './component/Tab/Tabs';
import SignUp from './component/screens/SignUp';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Router, Scene, Stack} from 'react-native-router-flux';
const App = () => (
  <Router>
    <Stack key="root">
      <Scene
        key="Splash"
        component={Splash}
        title="Splash"
        initial
        hideNavBar
      />
      <Scene key="Login" component={Login} title="Login" hideNavBar />
      <Scene key="Home" component={Home} title="Home" hideNavBar />
      <Scene key="SignUp" component={SignUp} title="SignUp" hideNavBar />
    </Stack>
  </Router>
);

export default App;
