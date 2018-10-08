/*
包含多个基于state的getter计算属性的对象
 */
export default {
	
	pushEmps (state) {
		for(let i of state.emps) {
			state.pushEmps.push(i);
		}
    return state.pushEmps;
	},
}