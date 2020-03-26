# loan-calculate-utils

贷款计算工具

## Install

npm

```shell
npm install loan-calculate-utils --save
```

## Usage

Average Capital Plus Interest（等额本息还款 ）

```js
var loanCalclateUtils = require('loan-calculate-utils');

loanCalclateUtils.calcAverageCapitalPlusInterest({
  amount: 1000000,  // 贷款金额
  term: 360,        // 贷款月数
  rate: 5.88,       // 贷款年利率
})

// returns
{
  monthlyPayment: "5918.57",  // 月供
  totalPayment: "2130686.49", // 月供
  totalInterest: "1130686.49" // 月供
  list: [
    {
      key: 1,                         // 期数
      beginningBalance: "1000000.00", // 当月还款前本金余额
      interest: "4900.00",            // 所还利息
      principal: "1018.57",           // 所还本金
      endingBalance: "998981.43"      // 当月还款后本金余额
    },
    ...
  ]
}
```
