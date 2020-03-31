import { calcAverageCapitalPlusInterest, calcAverageCapital } from '../source/index';

test('average capital plus interest term: 1', () => {
  expect(calcAverageCapitalPlusInterest({
    amount: 1000000,
    term: 1,
    rate: 4.9,
  })).toStrictEqual({
    totalPayment: "1004083.33",
    totalInterest: "4083.33",
    list: [
      {
        period: 1,
        monthlyPayment: "1004083.33",
        beginningBalance: "1000000.00",
        interest: "4083.33",
        principal: "1000000.00",
        endingBalance: "0.00",
      }
    ]
  });
});

test('average capital plus interest term: 2', () => {
  expect(calcAverageCapitalPlusInterest({
    amount: 1000000,
    term: 2,
    rate: 4.9,
  })).toStrictEqual({
    totalPayment: "1006129.16",
    totalInterest: "6129.16",
    list: [
      {
        period: 1,
        monthlyPayment: "503064.58",
        beginningBalance: "1000000.00",
        interest: "4083.33",
        principal: "498981.25",
        endingBalance: "501018.75",
      },
      {
        period: 2,
        monthlyPayment: "503064.58",
        beginningBalance: "501018.75",
        interest: "2045.83",
        principal: "501018.75",
        endingBalance: "0.00",
      },
    ]
  });
});

test('average capital term: 1', () => {
  expect(calcAverageCapital({
    amount: 1000000,
    term: 1,
    rate: 4.9,
  })).toStrictEqual({
    totalPayment: "1004083.33",
    totalInterest: "4083.33",
    list: [
      {
        period: 1,
        monthlyPayment: "1004083.33",
        beginningBalance: "1000000.00",
        interest: "4083.33",
        principal: "1000000.00",
        endingBalance: "0.00",
      }
    ]
  });
});

test('average capital term: 2', () => {
  expect(calcAverageCapital({
    amount: 1000000,
    term: 2,
    rate: 4.9,
  })).toStrictEqual({
    totalPayment: "1006125.00",
    totalInterest: "6125.00",
    list: [
      {
        period: 1,
        monthlyPayment: "504083.33",
        beginningBalance: "1000000.00",
        interest: "4083.33",
        principal: "500000.00",
        endingBalance: "500000.00",
      },
      {
        period: 2,
        monthlyPayment: "502041.67",
        beginningBalance: "500000.00",
        interest: "2041.67",
        principal: "500000.00",
        endingBalance: "0.00",
      },
    ]
  });
});