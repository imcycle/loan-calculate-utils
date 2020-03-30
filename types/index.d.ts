

/**
 * Average Capital Plus Interest（等额本息）
 */
export function calcAverageCapitalPlusInterest({ amount, term, rate }: {
  amount: number;  // 贷款金额
  term: number;    // 贷款月数
  rate: number;    // 年利率
}): {
  monthlyPayment: string;     // 月供
  totalPayment: string;       // 总还款
  totalInterest: string;      // 总利息
  list: {
    key: number;              // key 期数
    beginningBalance: string; // 当月还款前剩余本金
    interest: string;         // 所还利息
    principal: string;        // 所还本金
    endingBalance: string;    // 当月还款后剩余本金
  }[]
};