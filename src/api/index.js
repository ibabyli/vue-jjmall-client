/**
 * 包含n个接口请求函数的模块
 */
/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
//const BASE_URL = 'http://localhost:8855/h5'
const BASE_URL = '/h5'
// 获取到所有的员工：实现了分页
export const getAllEmps = (pageInfo) => ajax(BASE_URL+'/emp/getAllEmps', pageInfo);
export const getAllStus = (pageInfo) => ajax(BASE_URL+'/emp/getAllEmps', pageInfo);
//export const saveEmp = (empName, gender, email, dId) => ajax(BASE_URL+'/emp/addEmp', {empName, gender, email, dId}, 'POST');
export const saveEmp = (emp) => ajax(BASE_URL+'/emp/addEmp', emp, 'POST');
export const getEmpById = (id) => ajax(BASE_URL+'/emp/getEmpById', {id});

