import React, {Component} from 'react';
import image from '../Image/avatars.png';
import {
  View,
  StyleSheet,
  Image,
  Animated,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button,
} from 'native-base';
export default class Login extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        {/* <KeyboardAvoidingView> */}
        <Container style={{marginTop: 100, marginBottom: 150}}>
          <Form style={{width: 350, padding: 25}}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            {/* <View style={{justifyContent: 'center', alignSelf: 'center'}}> */}
            <Button
              style={{
                width: 200,
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <Text>Click Me!</Text>
            </Button>
            {/* </View> */}
          </Form>
        </Container>
        {/* </KeyboardAvoidingView> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4a0072',
  },
});
