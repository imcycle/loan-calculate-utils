/**
 * Average Capital Plus Interest（等额本息）
 */
export function calcAverageCapitalPlusInterest({ amount, term, rate }: {
  amount: number;  // 贷款金额
  term: number;    // 贷款期数（月数）
  rate: number;    // 年利率
}): {
  totalPayment: string;       // 总还款
  totalInterest: string;      // 总利息
  list: {
    period: number;           // 第几期
    monthlyPayment: string;   // 月供
    beginningBalance: string; // 当月还款前剩余本金
    interest: string;         // 月供利息
    principal: string;        // 月供本金
    endingBalance: string;    // 当月还款后剩余本金
  }[]
};

/**
 * Average Capital（等额本金）
 */
export function calcAverageCapital({ amount, term, rate }: {
  amount: number;  // 贷款金额
  term: number;    // 贷款期数（月数）
  rate: number;    // 年利率
}): {
  totalPayment: string;       // 总还款
  totalInterest: string;      // 总利息
  list: {
    period: number;           // 第几期
    monthlyPayment: string;   // 月供
    beginningBalance: string; // 当月还款前剩余本金
    interest: string;         // 月供利息
    principal: string;        // 月供本金
    endingBalance: string;    // 当月还款后剩余本金
  }[]
};