// import Vue from 'vue'
// // import moment from 'moment'
// import format from 'date-fns/format'
// // 自定义过滤器
// Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD HH:mm:ss') {
//   // return moment(value).format(formatStr)
//   return format(value, formatStr)
// })
//
// Vue.filter('date-format1', function (value, type = true) {
//   var strDate = "";
// 	strDate += value.substring(0, 4) + "-";
// 	strDate += value.substring(4, 6) + "-";
// 	strDate += value.substring(6, 8);
// 	if(type) {
// 		strDate += " " + value.substring(8, 10);
// 		strDate += ":" + value.substring(10, 12);
// 		strDate += ":" + value.substring(12, 14);
// 	}
// 	return strDate;
// })
//
// Vue.filter('money-format', function (num, decimalNum = 2) {
//   if ((num + "").trim() == "") {
//      return "";
//   }
//   if (isNaN(num)) {
//       return "";
//   }
//   if(!(typeof(num)==="number")&&(num!==Infinity)) { // 表示num不是数字类型
//   	num = parseFloat(num); //将num转换成数字类型
//   }
//   num = num.toFixed(decimalNum); //保留几位小数
//   num = parseFloat(num)
//   num = num.toLocaleString();
//   return num;	//返回的是字符串23,245.12保留2位小数
// })
//
//
