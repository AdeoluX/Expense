import React, {Component} from 'react';
import iii from '../../Image/car.png';
import food from '../../Image/meat.png';
import pizza from '../../Image/pizza.png';
import Utilities from '../../Image/utilities.png';
import Medicals from '../../Image/hospital.png';
import Insurance from '../../Image/insurance.png';
import Savings from '../../Image/bank.png';
import Miscellaneous from '../../Image/project.png';
import Travel from '../../Image/airplane.png';
import Debt from '../../Image/money.png';
import Rent from '../../Image/energy.png';
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Image,
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
  Icon,
  CardItem,
  Thumbnail,
  List,
  ListItem,
  Left,
  Body,
  //Image,
  Right,
} from 'native-base';
import Realm from 'realm';
import TestData from '../../testData.json';
import {
  monthlyTotalExpenses,
  numberWithCommas,
  categoryIcon,
  monthlyArray,
  selectCategory,
  pickCategory,
} from './script';
let realm;
import {ScrollView} from 'react-native-gesture-handler';
//import {TouchableOpacity} from 'react-native-gesture-handler';
export default class Inflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMonthlyExpenses: '',
      monthlyList: '',
      cat_Modal: false,
      transactionUUID: '',
      debitAmount: '',
    };
    realm = new Realm({
      path: 'CategoryDatabase.realm',
      schema: [
        {
          name: 'Category',
          properties: {
            _id: {type: 'int', default: 0},
            transaction_uuid: 'string',
            category: 'string',
            amount: 'string',
          },
        },
      ],
    });
  }

  componentDidMount() {
    const totalCostsThisMonth = monthlyTotalExpenses(
      this.setState.bind(this),
      TestData,
    );
    const monthsArray = monthlyArray(this.setState.bind(this), TestData);
    this.setState({
      totalMonthlyExpenses: numberWithCommas(totalCostsThisMonth),
      monthlyList: monthsArray,
    });
  }
  render() {
    const {totalMonthlyExpenses, monthlyList} = this.state;
    return (
      // <View style={styles.container}>
      <Container padder style={styles.container}>
        {/* <Content padder> */}
        <View style={{padding: 7}}>
          <Card padder style={styles.topCard}>
            <CardItem cardBody style={styles.topCardItem}>
              <Text style={{fontSize: 15, color: 'red', fontWeight: 'bold'}}>
                Total Expenses this Month
              </Text>
              <Text style={{fontSize: 45, color: 'red', fontWeight: 'bold'}}>
                ₦{totalMonthlyExpenses}
              </Text>
            </CardItem>
          </Card>
        </View>
        {/* </Content> */}

        <Content>
          <SafeAreaView style={{margin: 10}}>
            <ScrollView>
              <Card>
                <FlatList
                  data={monthlyList}
                  renderItem={({item}) => (
                    <View>
                      <List>
                        <ListItem thumbnail>
                          <Left>
                            <Thumbnail
                              square
                              // ${categoryIcon(item)}
                              source={`${categoryIcon(item)}`}
                              style={{height: 45, width: 45}}
                            />
                          </Left>
                          <TouchableOpacity
                            onPress={() => alert(JSON.stringify(item))}>
                            <Body>
                              <Text style={{color: 'red', fontWeight: 'bold'}}>
                                ₦{numberWithCommas(item.amountDebit)}
                              </Text>
                              <Text note numberOfLines={2}>
                                From {item.channel}
                              </Text>
                            </Body>
                          </TouchableOpacity>

                          <Right>
                            {/* <TouchableOpacity>
                              <Icon name="md-arrow" />
                            </TouchableOpacity> */}
                            <Button
                              transparent
                              onPress={() =>
                                selectCategory(
                                  this.setState.bind(this),
                                  item.transDate,
                                  item.amountDebit,
                                )
                              }
                              style={{marginLeft: '25%'}}>
                              <Icon
                                name="ios-arrow-down"
                                style={{color: '#000'}}
                              />
                            </Button>
                          </Right>
                        </ListItem>
                      </List>
                    </View>
                  )}
                  keyExtractor={(item) => item.postingTellerId}
                />
              </Card>
            </ScrollView>
          </SafeAreaView>
          <Modal
            animationType="slide"
            visible={this.state.cat_Modal}
            transparent={true}
            style={styles.modal}>
            <View style={{backgroundColor: '#000000aa', flex: 1, padding: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '50%',
                }}>
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    //backgroundColor: 'red',
                    borderWidth: 3,
                    borderColor: '#ffffffaa',
                    borderRadius: 20,
                    justifyContent: 'center',
                  }}
                  onPress={() => this.setState({cat_Modal: false})}>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 25,
                        color: '#ffffffaa',
                        fontWeight: 'bold',
                      }}>
                      X
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  marginTop: '8%',
                  paddingHorizontal: 30,
                  borderTopRightRadius: 25,
                  borderTopLeftRadius: 25,
                  flex: 1,
                  //alignItems: 'center',
                }}>
                <Text
                  style={{textAlign: 'center', fontSize: 20, marginTop: 15}}>
                  Categories
                </Text>
                <View style={{marginTop: '5%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Transportation',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={iii} style={styles.catImage} />
                        <Text>Transportation</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Food',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={food} style={styles.catImage} />
                        <Text>Food</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Entertainment',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={pizza} style={styles.catImage} />
                        <Text>Entertainment</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* //==================Second Row======================= */}
                <View style={{marginTop: '10%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Insurance',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={Insurance} style={styles.catImage} />
                        <Text>Insurance</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Medicals',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={Medicals} style={styles.catImage} />
                        <Text>Medicals</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Utilities',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={Utilities} style={styles.catImage} />
                        <Text>Utilities</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* //==================Third Row======================= */}
                <View style={{marginTop: '10%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Savings',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={Savings} style={styles.catImage} />
                        <Text>Savings</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Miscellaneous',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={Miscellaneous} style={styles.catImage} />
                        <Text>Miscellaneous</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Travel',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={Travel} style={styles.catImage} />
                        <Text>Travel</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* //==================Fourth Row======================= */}
                <View style={{marginTop: '10%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Debt',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={Debt} style={styles.catImage} />
                        <Text>Debt</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        pickCategory(
                          this.state,
                          'Rent',
                          this.setState.bind(this),
                        )
                      }>
                      <View style={styles.eachRow}>
                        <Image source={Rent} style={styles.catImage} />
                        <Text>Rent</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.eachRow}>
                      <View style={styles.catImage} />
                      {/* <Text>Travel</Text> */}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#F6797F',
    //padding: 5,
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
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7021a',
    padding: 100,
  },
  catImage: {
    width: 50,
    height: 50,
  },
  eachRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
