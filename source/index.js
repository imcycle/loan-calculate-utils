import { plus, minus, times, divide } from 'number-precision';

/**
 * Average Capital Plus Interest（等额本息）
 */
function calcAverageCapitalPlusInterest({ amount, term, rate }) {
  // 月利率
  const monthlyRate = times(divide(rate, 12), 0.01);

  // 每月月供 每月月供额 =〔贷款本金×月利率×(1＋月利率)＾还款月数〕÷〔(1＋月利率)＾还款月数-1〕
  const monthlyPayment = divide(
    times(
      amount,
      monthlyRate,
      (plus(1, monthlyRate) ** term),
    ),
    minus(
      (plus(1, monthlyRate) ** term),
      1,
    ),
  );

  // 还款总额
  const totalPayment = times(monthlyPayment, term);

  // 还款总利息
  const totalInterest = minus(totalPayment, amount);

  // 每月还款明细
  const list = [];
  let beginningBalance = amount; // 所剩本金
  for (let i = 0; i < term; i++) {
    const monthlyInterest = times(beginningBalance, monthlyRate);
    const monthlyPrincipal = minus(monthlyPayment, monthlyInterest);
    const endingBalance = minus(beginningBalance, monthlyPrincipal);
    list.push({
      period: i + 1,
      monthlyPayment: monthlyPayment.toFixed(2),
      beginningBalance: beginningBalance.toFixed(2),
      interest: monthlyInterest.toFixed(2),
      principal: monthlyPrincipal.toFixed(2),
      endingBalance: endingBalance.toFixed(2),
    });
    beginningBalance = endingBalance;
  }

  return {
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    list,
  };
}

/**
 * Average Capital（等额本金）
 */
function calcAverageCapital({ amount, term, rate }) {
  // 月利率
  const monthlyRate = times(divide(rate, 12), 0.01);

  // 每月所还本金
  const monthlyPrincipal = divide(amount, term);

  // 还款总利息
  const totalInterest = times(plus(term, 1), amount, monthlyRate, 0.5);

  // 还款总额
  const totalPayment = plus(totalInterest, amount);

  // 每月还款明细
  const list = [];
  let beginningBalance = amount; // 所剩本金
  for (let i = 0; i < term; i++) {
    const monthlyInterest = times(beginningBalance, monthlyRate);
    const monthlyPayment = plus(monthlyInterest, monthlyPrincipal);
    const endingBalance = minus(beginningBalance, monthlyPrincipal);
    list.push({
      period: i + 1,
      monthlyPayment: monthlyPayment.toFixed(2),
      beginningBalance: beginningBalance.toFixed(2),
      interest: monthlyInterest.toFixed(2),
      principal: monthlyPrincipal.toFixed(2),
      endingBalance: endingBalance.toFixed(2),
    });
    beginningBalance = endingBalance;
  }

  return {
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    list,
  };
}

export {
  calcAverageCapitalPlusInterest,
  calcAverageCapital,
};
export default {
  calcAverageCapitalPlusInterest,
  calcAverageCapital,
};
