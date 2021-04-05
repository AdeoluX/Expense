import car from '../../Image/car.png';
import pizza from '../../Image/pizza.png';
import rent from '../../Image/energy.png';
import food from '../../Image/meat.png';
import Medicals from '../../Image/hospital.png';
import Insurance from '../../Image/insurance.png';
import Savings from '../../Image/bank.png';
import Miscellaneous from '../../Image/project.png';
import Travel from '../../Image/airplane.png';
import Debt from '../../Image/money.png';
import Utilities from '../../Image/utilities.png';
import faq from '../../Image/faq.png';
//import Rent from '../../Image/energy.png';
import Realm from 'realm';
let realm;
var currentDay = function (sp) {
  var today = new Date();
  var dd = today.getDate();
  var mm = 6; //today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm;
  return `${mm}/`;
};

export function monthlyTotalExpenses(a, b) {
  //Get Present data
  var data = b.histDetails;
  const date = currentDay();

  //gets all expenses made this month
  const listOfMonthlyExpenses = data.filter((item) => {
    return item.transDate.slice(0, 2) === date && item.amountDebit !== '';
  });
  //get all amounts in a list and sum them
  const allMonthlyCosts = listOfMonthlyExpenses
    .map((item) => {
      return item.amountDebit;
    })
    .map(function (elt) {
      // assure the value can be converted into an integer
      return /^\d+$/.test(elt) ? parseInt(elt) : 0;
    })
    .reduce(function (a, b) {
      // sum all resulting numbers
      return a + b;
    });
  return allMonthlyCosts;
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function monthlyArray(a, b) {
  //Get Present data
  var data = b.histDetails;
  const date = currentDay();

  //gets all expenses made this month
  const listOfMonthlyExpenses = data.filter((item) => {
    return item.transDate.slice(0, 2) === date && item.amountDebit !== '';
  });
  return listOfMonthlyExpenses;
}

export function categoryIcon(b) {
  var data = b;
  //return item.transDate.slice(0, 2) === date && item.amountDebit !== '';

  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  const uid = b.transDate;
  //alert(JSON.stringify(det));
  // var uuid = realm
  //   .objects('Category')
  //   .filtered(`transaction_uuid CONTAINS '${uid}'`);

  if (det.length > 0) {
    const uuid = det.find((item) => {
      return item.transaction_uuid === uid;
    });
    //alert(JSON.stringify(uuid));
    if (uuid) {
      if (uuid.category === 'Food') return food;
      if (uuid.category === 'Entertainment') return pizza;
      if (uuid.category === 'Rent') return rent;
      if (uuid.category === 'Medicals') return Medicals;
      if (uuid.category === 'Travel') return Travel;
      if (uuid.category === 'Debt') return Debt;
      if (uuid.category === 'Miscellaneous') return Miscellaneous;
      if (uuid.category === 'Insurance') return Insurance;
      if (uuid.category === 'Savings') return Savings;
      if (uuid.category === 'Utilities') return Utilities;
      if (uuid.category === 'Transportation') return car;
    } else return faq;
    // if (search) return search;
  } else return faq;
  // if (det.length === 0) {
  // }
}
export function selectCategory(stateManager, uuid, amount) {
  //this.setState()
  //alert(amount);
  stateManager({
    cat_Modal: true,
    transactionUUID: uuid,
    debitAmount: amount,
  });
}

export function pickCategory(state, Category, set) {
  // cat_realm = new Realm({path: 'CategoryDatabase.realm'});
  // var stored_cat = cat_realm.objects('Category');
  // if (stored_cat.length === 0)
  //   return
  //return alert(JSON.stringify(state));
  try {
    realm = new Realm({path: 'CategoryDatabase.realm'});
    const det = realm.objects('Category');
    //alert(JSON.stringify(det));
    //alert(state.transactionUUID);
    //if(det.length )
    const {transactionUUID, debitAmount} = state;
    if (det.length > 0) {
      const search = det.find((item) => {
        return item.transaction_uuid === transactionUUID;
      });
      //alert(JSON.stringify(search));
      if (search) {
        realm.write(() => {
          const {transactionUUID, debitAmount} = state;
          //var ID = this.input_user_id;
          //console.log('ID', ID);
          //alert(transactionUUID);
          var obj = realm
            .objects('Category')
            .filtered(`transaction_uuid CONTAINS '${String(transactionUUID)}'`);
          //alert('obj', obj);
          if (obj.length > 0) {
            obj[0].category = Category;
          }
        });
        set({
          cat_Modal: false,
        });
      }
      if (!search) {
        // var transactionId = realm
        //   .objects('Category')
        //   .filtered(`transaction_uuid CONTAINS '${String(transactionUUID)}'`);
        //if (transactionId.length < 1) {
        //return alert('Nothing');

        //return
        realm.write(() => {
          var ID =
            realm.objects('Category').sorted('_id', true).length > 0
              ? realm.objects('Category').sorted('_id', true)[0]._id + 1
              : 1;
          realm.create('Category', {
            _id: ID,
            transaction_uuid: transactionUUID,
            category: Category,
            amount: debitAmount,
          });
        });
        //alert(JSON.stringify(det));
        set({
          cat_Modal: false,
        });
        // }
      }
    }
    if (det.length === 0) {
      realm.write(() => {
        var ID =
          realm.objects('Category').sorted('_id', true).length > 0
            ? realm.objects('Category').sorted('_id', true)[0]._id + 1
            : 1;
        realm.create('Category', {
          _id: ID,
          transaction_uuid: transactionUUID,
          category: Category,
          amount: debitAmount,
        });
      });
      //alert(JSON.stringify(det));
      set({
        cat_Modal: false,
      });
    }
    // var transactionId = realm
    //   .objects('Category')
    //   .filtered(`transaction_uuid CONTAINS '${String(transactionUUID)}'`);
    // if (transactionId.length < 1) {
    //   //return alert('Nothing');
    //   //return
    //   realm.write(() => {
    //     var ID =
    //       realm.objects('Category').sorted('_id', true).length > 0
    //         ? realm.objects('Category').sorted('_id', true)[0]._id + 1
    //         : 1;
    //     realm.create('Category', {
    //       _id: ID,
    //       transaction_uuid: transactionUUID,
    //       category: Category,
    //       amount: debitAmount,
    //     });
    //   });
    //   alert(JSON.stringify(det));
    // }
    // if (transactionId.length > 0) return (transactionId[0].category = Category);
  } catch (e) {
    alert(e);
  }
}
//
