import { plus, minus, times, divide } from 'number-precision';

interface A {
  loanAmount: number;
  termMonths: number;
  APR: number;
}

// 贷款总金额
// 利息总金额
// 贷款年数 termYears
// 贷款月数 termMonths
// 年利率  APR
// 月利率
// 日利率

// 等额本息
// 等额本金

// 首月月供
// 月供
// 月供所还的本金
// 月供所还的利息
// 本金余额





function getDataBy({ loanAmount, termMonths, APR }: A) {
  var mouthrate = times(divide(APR, 12), 0.01);

  // 每月月供  每月月供额 =〔贷款本金×月利率×(1＋月利率)＾还款月数〕÷〔(1＋月利率)＾还款月数-1〕
  var yuegong = divide(
    times(
      loanAmount,
      mouthrate,
      Math.pow(
        plus(1, mouthrate),
        termMonths
      ),
    ),
    minus(
      Math.pow(
        plus(1, mouthrate),
        termMonths,
      ),
      1,
    )
  );

  // 还款总额
  var zonge = times(yuegong, termMonths);
  // 利息总额
  var zongxi = minus(zonge, loanAmount);

  // 每月还款明细
  var dataList = [];
  var total = loanAmount;
  for (var i = 0; i < termMonths; i++) {
    var yuexi = times(total, mouthrate);
    var yuejin = minus(yuegong, yuexi);
    total = minus(total, yuejin);
    dataList.push({
      key: i + 1,
      yuegong,
      yuejin,
      yuexi,
      yujin: total,
    })
  }
  dataList.forEach(item => {
    for (var k in item) {
      if (k !== 'key') {
        item[k] = item[k].toFixed(2);
      };
    }
  })

  return {
    yuegong: yuegong.toFixed(2),
    zonge: zonge.toFixed(2),
    zongxi: zongxi.toFixed(2),
    dataList,
  }
}


var a = {
  loanAmount: loanAmount,
  interestAmount: '123',

}


var data = getdetail(100, 10, 5)

console.log(data)


// export default {
//   getdetail
// }