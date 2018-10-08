/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ALL_EMPS,
  SAVE_EMP,
  INCREMENT_EMPS_COUNT,
  DECREMENT_EMPS_COUNT,
  RECEIVE_ALL_STUS,
} from './mutation-types'

export default {
  [RECEIVE_ALL_EMPS] (state, {emps}) {
    state.emps = emps;
    /*for(let i of emps) {
    	state.pushEmps.push(emp);
    }*/
  },
  
  [RECEIVE_ALL_STUS] (state, {stus}) {
    state.stus = stus;
    /*for(let i of emps) {
    	state.pushEmps.push(emp);
    }*/
  },
  
  // 保存员工
  [SAVE_EMP] (state, {emp}) {
    state.emp = emp
  },
  
  [INCREMENT_EMPS_COUNT](state, {emps}) {
    // 将food添加到cartFoods中
    console.log("mutation")
    console.log(emps)
  	/*for(let i=0; i<emps.length; i++) {
  		
  	}*/
  },
  /*[DECREMENT_EMPS_COUNT](state, {food}) {
    if(food.count) {// 只有有值才去减
      food.count--
      if(food.count===0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },*/
  
  
}