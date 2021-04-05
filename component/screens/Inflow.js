import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
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
  Card,
  CardItem,
  Body,
  Icon,
  Right,
  List,
} from 'native-base';
import TestData from '../../testData.json';
export default class Inflow extends Component {
  state = {};
  componentDidMount() {
    //alert(JSON.stringify(TestData));
  }
  render() {
    return (
      <View style={styles.container}>
        <Content padder>
          <Card padder style={styles.topCard}>
            <CardItem cardBody style={styles.topCardItem}>
              <Text style={{fontSize: 15, color: 'green', fontWeight: 'bold'}}>
                Total Income this Month
              </Text>
              <Text style={{fontSize: 45, color: 'green'}}>₦ 20,000,000</Text>
            </CardItem>
          </Card>

          <Card>
            <FlatList
              data={TestData.histDetails}
              renderItem={({item}) => (
                <CardItem>
                  <Icon active name="add-circle" color="#d50000" />
                  <Text>{item.channel}</Text>
                </CardItem>
              )}
              keyExtractor={(item) => item.postingTellerId}
            />
          </Card>
        </Content>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6797F',
  },
  topCard: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 7,
  },
  topCardItem: {
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: 20,
  },
});
