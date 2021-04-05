import React, {Component} from 'react';
import image from '../Image/expense.png';
import {Actions} from 'react-native-router-flux';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
export default class Splash extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  };
  componentDidMount() {
    const {LogoAnime, LogoText} = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }).start(),
      Animated.timing(LogoText, {
        toValue: 1,
        duration: 12000,
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
      });
    });

    setTimeout(() => {
      Actions.Login();
    }, 4000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image source={image} style={styles.image} />
        </Animated.View>
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
    backgroundColor: '#F6797F',
  },
  image: {
    width: 95,
    height: 95,
  },
});
