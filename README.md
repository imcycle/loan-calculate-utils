# loan-calculate-utils

贷款计算工具

## Install

npm

```shell
npm install loan-calculate-utils --save
```

## Usage

### Average Capital Plus Interest（等额本息还款）

```js
var loanCalclateUtils = require('loan-calculate-utils');

loanCalclateUtils.calcAverageCapitalPlusInterest({
  amount: 1000000,  // 贷款金额
  term: 360,        // 贷款期数（月数）
  rate: 4.9,        // 年利率
})

// returns
{
  totalPayment: "1910616.19",         // 总还款
  totalInterest: "910616.19",         // 总利息
  list: [
    {
      period: 1,                      // 第几期
      monthlyPayment: "5307.27",      // 月供
      beginningBalance: "1000000.00", // 当月还款前剩余本金
      interest: "4083.33",            // 月供利息
      principal: "1223.93",           // 月供本金
      endingBalance: "998776.07",     // 当月还款后剩余本金
    },
    ...
  ]
}
```

### Average Capital（等额本金还款）

```js
var loanCalclateUtils = require('loan-calculate-utils');

loanCalclateUtils.calcAverageCapital({
  amount: 1000000,  // 贷款金额
  term: 360,        // 贷款期数（月数）
  rate: 4.9,        // 年利率
})

// returns
{
  totalPayment: "1737041.67",         // 总还款
  totalInterest: "737041.67",         // 总利息
  list: [
    {
      period: 1,                      // 第几期
      monthlyPayment: "6861.11",      // 月供
      beginningBalance: "1000000.00", // 当月还款前剩余本金
      interest: "4083.33",            // 月供利息
      principal: "2777.78",           // 月供本金
      endingBalance: "997222.22",     // 当月还款后剩余本金
    },
    ...
  ]
}
```
