/**
 * ajax请求函数模块
 * 返回值：promise对象(异步返回的数据是：response.data)
 */
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
	return new Promise(function(resolve, reject) {
		// 执行ajax异步请求
		let promise;
		// 封装url query参数数据
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&'
		});
		if(type === 'GET') {
			console.log("get请求==>")
			if(dataStr != '') {
				dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
				url = url + '?' + dataStr;
			}
			// 发送get请求
			console.log("url==>", url)
			promise = axios.get(url)
		} else {
			console.log("post请求==>")
			console.log(data)
			// 发送post请求
			let postStr = '';
			if(dataStr != '') {
				dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
				postStr = postStr + dataStr;
			}
      console.log("url==>", url, "postStr==>", postStr);
			promise = axios.post(url, postStr);
		}
		promise.then(function (response) {
			// 成功了调用resolve
			//console.log("success")
			resolve(response.data)
		}).catch(function (error) {
			// 失败了调用reject
			//console.log("error")
			reject(error);
		})
	})
}
