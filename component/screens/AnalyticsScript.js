import Realm from 'realm';
let realm;
import dat from '../../testData.json';
//let monthlytotal = numberWitotalCostsThisMonth);
var currentDay = function (sp) {
  var today = new Date();
  var dd = today.getDate();
  var mm = 6; //today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm;
  return `${mm}/`;
};
//=============Monthly Total===============================
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
export function analyticsTransportaion() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Transportation'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Food Function =================================
export function analyticsFood() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Food'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    //alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Entertainment Function =================================
export function analyticsEntertainment() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Entertainment'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Insurance Function =================================
export function analyticsInsurance() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Insurance'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Medicals Function =================================
export function analyticsMedicals() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Medicals'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Utilities Function =================================
export function analyticsUtilities() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Utilities'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Savings Function =================================
export function analyticsSavings() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Savings'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Miscellaneous Function =================================
export function analyticsMiscellaneous() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Miscellaneous'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Travel Function =================================
export function analyticsTravel() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Travel'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Debt Function =================================
export function analyticsDebt() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Debt'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}

//=================== Rent Function =================================
export function analyticsRent() {
  var currentMonth = currentDay();
  realm = new Realm({path: 'CategoryDatabase.realm'});
  const det = realm.objects('Category');
  //alert(JSON.stringify(det));
  //alert(currentMonth);

  const uuid = det.find((item) => {
    item.transaction_uuid.slice(0, 1) === currentMonth;
  });
  //alert(JSON.stringify(uuid));
  var obj = realm
    .objects('Category')
    .filtered(
      `transaction_uuid BEGINSWITH '${String(
        currentMonth,
      )}' && category CONTAINS 'Rent'`,
    );
  //   alert(JSON.stringify(obj));
  if (obj.length > 0) {
    const final = obj
      .map((item) => {
        return item.amount;
      })
      .map(function (elt) {
        // assure the value can be converted into an integer
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce((a, b) => {
        return a + b;
      });
    // alert(JSON.stringify(final));
    //const arrr = [obj];
    //alert(JSON.stringify(arrr));
    return final;
  }
  if (obj.length === 0) return 0;
}
