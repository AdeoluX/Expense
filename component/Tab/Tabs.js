import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Body,
  Title,
  Right,
  Left,
  Subtitle,
} from 'native-base';
import Tab1 from '../screens/Inflow';
import Tab2 from '../screens/Outflow';
import Tab3 from '../screens/Analysis';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header
          hasTabs
          style={{backgroundColor: '#F6797F'}}
          androidStatusBarColor="#000">
          <View>
            <Left />
            <Body>
              <Title>Home</Title>
            </Body>
            {/* <Right /> */}
          </View>
        </Header>
        <Tabs>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#F6797F'}}>
                <Icon name="download" />
                <Text>Inflow</Text>
              </TabHeading>
            }>
            <Tab1 />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#F6797F'}}>
                <Icon name="cloud-upload" />
                <Text>Outflow</Text>
              </TabHeading>
            }>
            <Tab2 />
          </Tab>
          {/* <Tab
            heading={ */}
          {/* <TabHeading style={{backgroundColor: '#F6797F'}}> */}
          {/* <Icon name="cloud-upload" /> */}
          {/* <Text>Total</Text>
              </TabHeading>
            }>
            <Tab2 />
          </Tab> */}
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#F6797F'}}>
                <Icon name="pulse" />
                <Text>Analysis</Text>
              </TabHeading>
            }>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
