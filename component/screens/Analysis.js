import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
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
  Image,
} from 'native-base';
import PureChart from 'react-native-pure-chart';
import Realm from 'realm';
let realm;
import dat from '../../testData.json';
import {
  analyticsTransportaion,
  analyticsFood,
  analyticsEntertainment,
  analyticsInsurance,
  analyticsMedicals,
  analyticsUtilities,
  analyticsSavings,
  analyticsMiscellaneous,
  analyticsTravel,
  analyticsDebt,
  analyticsRent,
  monthlyTotalExpenses,
} from '../screens/AnalyticsScript';
//import {ScrollView} from 'react-native-gesture-handler';
// import {BarChart} from 'react-native-charts';
// import {BarChart, Grid, StackedBarChart} from 'react-native-svg-charts';
export default class Inflow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // realm = new Realm({
    //   path: 'CategoryDatabase.realm',
    //   schema: [
    //     {
    //       name: 'Category',
    //       properties: {
    //         _id: {type: 'int', default: 0},
    //         transaction_uuid: 'string',
    //         category: 'string',
    //         amount: 'string',
    //       },
    //     },
    //   ],
    // });
  }

  componentDidMount() {}
  render() {
    const chartConfig = {
      backgroundGradientFrom: '#1E2920',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#081300',
      backgroundGradientToOpacity: 0,
      color: (opacity = 2) => `rgba(26, 255, 1, ${opacity})`,
      strokeWidth: 3, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false,
      labelColor: (opacity = 2) => `rgba(255, 205, 105, ${opacity})`,
    };
    const chartConfig2 = {
      backgroundGradientFrom: '#1E2920',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#081300',
      backgroundGradientToOpacity: 0,
      color: (opacity = 2) => `rgba(255,255,255, ${opacity})`,
      strokeWidth: 3, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false,
      labelColor: (opacity = 2) => `rgba(255,255,255, ${opacity})`,
    };
    const chartConfig3 = {
      backgroundGradientFrom: '#1E2920',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#081300',
      backgroundGradientToOpacity: 0,
      //color: (opacity = 2) => `rgba(255,255,255, ${opacity})`,
      strokeWidth: 3, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false,
      labelColor: (opacity = 2) => `rgba(255,255,255, ${opacity})`,
    };
    const data3 = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],

      legend: ['Rainy Days', 'Sunny Days', 'Snowy Days'], // optional
    };
    const data = [
      {
        name: 'Transport',
        population: Math.round(
          (analyticsTransportaion() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#d50000',
        legendFontColor: '#d50000',
        legendFontSize: 15,
      },
      {
        name: 'Food',
        population: Math.round(
          (analyticsFood() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#aa00ff',
        legendFontColor: '#aa00ff',
        legendFontSize: 15,
      },
      {
        name: 'Entertain',
        population: Math.round(
          (analyticsEntertainment() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#cabf45',
        legendFontColor: '#cabf45',
        legendFontSize: 15,
      },
      {
        name: 'Insurance',
        population: Math.round(
          (analyticsInsurance() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#ef6c00',
        legendFontColor: '#ef6c00',
        legendFontSize: 15,
      },
      {
        name: 'Medicals',
        population: Math.round(
          (analyticsMedicals() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#34515e',
        legendFontColor: '#34515e',
        legendFontSize: 15,
        legendFontWeight: 'bold',
      },
      {
        name: 'Utilities',
        population: Math.round(
          (analyticsUtilities() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#d81b60',
        legendFontColor: '#d81b60',
        legendFontSize: 15,
      },
      {
        name: 'Savings',
        population: Math.round(
          (analyticsSavings() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#60ad5e',
        legendFontColor: '#60ad5e',
        legendFontSize: 15,
      },
      {
        name: 'Miscellane',
        population: Math.round(
          (analyticsMiscellaneous() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#006978',
        legendFontColor: '#006978',
        legendFontSize: 15,
      },
      {
        name: 'Travel',
        population: Math.round(
          (analyticsTravel() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#ff8a65',
        legendFontColor: '#ff8a65',
        legendFontSize: 15,
      },
      {
        name: 'Debt',
        population: Math.round(
          (analyticsDebt() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#8d6e63',
        legendFontColor: '#8d6e63',
        legendFontSize: 15,
      },
      {
        name: 'Rent',
        population: Math.round(
          (analyticsRent() * 100) /
            monthlyTotalExpenses(this.setState.bind(this), dat),
        ),
        color: '#f06292',
        legendFontColor: '#f06292',
        legendFontSize: 15,
      },
    ];
    return (
      <Container padder style={styles.container}>
        <ScrollView>
          <View style={{padding: 10}}>
            <Card padder style={styles.topCard}>
              <CardItem cardBody style={styles.topCardItem}>
                <View>
                  <Text style={{color: '#d50000', fontWeight: 'bold'}}>
                    Category Expense (%)
                  </Text>
                </View>
                <View style={{apdding: 10}}>
                  <PieChart
                    data={data}
                    width={screenWidth / 1.195}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="10"
                    absolute
                  />
                </View>
              </CardItem>
            </Card>
          </View>
          <View style={{padding: 10}}>
            <Card padder style={styles.blueCard}>
              <CardItem cardBody style={styles.blueCardItem}>
                <View>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Monthly Income
                  </Text>
                </View>
                <View>
                  <BarChart
                    // style={graphStyle}
                    data={data3}
                    width={screenWidth / 1.15}
                    height={210}
                    yAxisLabel="₦"
                    chartConfig={chartConfig2}
                    verticalLabelRotation={30}
                  />
                </View>
              </CardItem>
            </Card>
          </View>
          <View style={{padding: 10}}>
            <Card padder style={styles.redCard}>
              <CardItem cardBody style={styles.redCardItem}>
                <View>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Monthly Expenses
                  </Text>
                </View>
                <View>
                  <LineChart
                    data={{
                      labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                      ],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                          ],
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width / 1.15} // from react-native
                    height={220}
                    yAxisLabel="₦"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={chartConfig2}
                    // chartConfig={{
                    //   backgroundColor: '#b71c1c',
                    //   //backgroundGradientFrom: '#fb8c00',
                    //   backgroundGradientTo: '#b71c1c',
                    //   //decimalPlaces: 2, // optional, defaults to 2dp
                    //   color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                    //   labelColor: (opacity = 0) =>
                    //     `rgba(255, 255, 255, ${opacity})`,
                    //   style: {
                    //     borderRadius: 16,
                    //   },
                    //   propsForDots: {
                    //     r: '6',
                    //     strokeWidth: '2',
                    //     stroke: '#ffa726',
                    //   },
                    // }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                </View>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
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
  blueCardItem: {
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#00227b',
    margin: 20,
  },
  redCardItem: {
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#b71c1c',
    margin: 20,
  },
  redCard: {
    backgroundColor: '#b71c1c',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 7,
  },
  blueCard: {
    backgroundColor: '#00227b',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 7,
  },
});
