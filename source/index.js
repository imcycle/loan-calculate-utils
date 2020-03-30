import { plus, minus, times, divide } from 'number-precision';

function calcAverageCapitalPlusInterest({ amount, term, rate }) {
  // 月利率
  var monthlyRate = times(divide(rate, 12), 0.01);

  // 每月月供 每月月供额 =〔贷款本金×月利率×(1＋月利率)＾还款月数〕÷〔(1＋月利率)＾还款月数-1〕
  var monthlyPayment = divide(
    times(
      amount,
      monthlyRate,
      Math.pow(
        plus(1, monthlyRate),
        term
      ),
    ),
    minus(
      Math.pow(
        plus(1, monthlyRate),
        term,
      ),
      1,
    )
  );

  // 还款总额
  var totalPayment = times(monthlyPayment, term);

  // 利息总额
  var totalInterest = minus(totalPayment, amount);

  // 每月还款明细
  var list = [];
  var beginningBalance = amount;
  for (var i = 0; i < term; i++) {
    var monthlyInterest = times(beginningBalance, monthlyRate);
    var monthlyPrincipal = minus(monthlyPayment, monthlyInterest);
    var endingBalance = minus(beginningBalance, monthlyPrincipal);
    list.push({
      key: i + 1,
      beginningBalance: beginningBalance.toFixed(2),
      interest: monthlyInterest.toFixed(2),
      principal: monthlyPrincipal.toFixed(2),
      endingBalance: endingBalance.toFixed(2),
    });
    beginningBalance = endingBalance;
  }

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    list,
  }
}

export {
  calcAverageCapitalPlusInterest
}
export default {
  calcAverageCapitalPlusInterest
}
