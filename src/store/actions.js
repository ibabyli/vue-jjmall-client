/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ALL_EMPS,
  SAVE_EMP,
  INCREMENT_EMPS_COUNT,
  DECREMENT_EMPS_COUNT,
  RECEIVE_ALL_STUS,
} from './mutation-types'
import {
  getAllEmps,
  getAllStus,
  getEmpById,
} from '../api'

export default {
  
  // 异步获取所有员工
	/*async getAllEmps({commit}, {pageInfo}, callback) {
	    // 发送异步ajax请求
	    const result = await getAllEmps(pageInfo);
	    // 提交一个mutation 100：成功的响应码
	    if (result.code === 100) {
	      const emps = result.extend.pageInfo;
	      //alert(emps.list.length);
	      // 交予mutation，然后在mutation中将数据保存在state中
	      commit(RECEIVE_ALL_EMPS, {emps})
	      callback && callback();
	    }
	},*/
	
	async getAllEmps({commit}, {pageInfo}) {
	    // 发送异步ajax请求
	    //console.log("action==>", pageInfo.pageNum)
	    const result = await getAllEmps(pageInfo);
	    // 提交一个mutation 100：成功的响应码
	    if (result.code === 100) {
	      const emps = result.extend.pageInfo;
	      //alert(emps.list.length);
	      // 交予mutation，然后在mutation中将数据保存在state中
	      commit(RECEIVE_ALL_EMPS, {emps})
	    }
	},
	
	async getAllStus({commit}, {pageInfo}) {
	    // 发送异步ajax请求
	    //console.log("action==>", pageInfo.pageNum)
	    const result = await getAllStus(pageInfo);
	    // 提交一个mutation 100：成功的响应码
	    if (result.code === 100) {
	      const stus = result.extend.pageInfo;
	      //alert(emps.list.length);
	      // 交予mutation，然后在mutation中将数据保存在state中
	      commit(RECEIVE_ALL_STUS, {stus})
	    }
	},
	
	// 异步根据ID查询员工
	async getEmpById({commit}, id) {
	    // 发送异步ajax请求
	    const result = await getEmpById(id);
	    // 提交一个mutation 100：成功的响应码
	    if (result.code === 100) {
	      const emp = result.extend.emp;
	      console.log(result);
	      //alert(emps.list.length);
	      // 交予mutation，然后在mutation中将数据保存在state中
	      commit(SAVE_EMP, {emp})
	    }
	},
	
	
	// 同步更新food中的count值
  updateScrollEmps({commit}, {isAdd, emps}) {
    if (isAdd) {
      commit(INCREMENT_EMPS_COUNT, {emps})
    } else {
      commit(DECREMENT_EMPS_COUNT, {emps})
    }
  },
	// 同步pushEmps
	pushEmps({commit, state}) {
		// 获取到state中的emps
		for(let i of state.emps) {
			state.pushEmps.push(i);
		}
	},
	
}