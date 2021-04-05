import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
//import { TextInput } from 'react-native-gesture-handler';
export default class Login extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{marginTop: 64}}>
          <Text
            style={{
              marginHorizontal: 20,
              color: '#fff',
              fontSize: 30,
              fontWeight: 'bold',
              textShadowColor: '#000',
            }}>
            Login
          </Text>
          <TextInput
            placeholder="Username"
            style={styles.textInputs}
            placeholderTextColor="#ffffffaa"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ffffffaa"
            style={styles.textInputs}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{marginRight: 50}}
            onPress={() => Actions.SignUp()}>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold',
                textShadowColor: '#000',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 50}}
            onPress={() => Actions.Home()}>
            <Icon
              name="ios-arrow-dropright"
              style={{color: '#fff', fontSize: 100}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6797F',
  },
  circle: {
    width: 500,
    height: 500,
    backgroundColor: '#14cba8',
    borderRadius: 250,
    position: 'absolute',
    left: -150,
    top: -60,
    borderWidth: 7,
    borderColor: '#ffb2dd',
  },
  textInputs: {
    width: '89%',
    marginHorizontal: 20,
    borderWidth: 3,
    borderColor: '#64ffda',
    backgroundColor: '#ffffff0a',
    borderRadius: 10,
    marginTop: 10,
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
