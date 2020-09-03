import request from "../../request/index";
import { USER_ROLE } from "../constant/index";
/**
 *
 * @function
 * @param {object} params 参数集合
 * @param {string} params.name - 姓名
 * @param {number} params.age - 年龄
 * @param {number} params.role - 角色
 * @returns {Promise} 返回axios
 * @see  文档地址
 */
export function getUserAjax(params) {
  params.role = params.role || USER_ROLE.COMMON;
  return request({
    method: "get",
    baseURL: ".",
    url: ".",
    params
  });
}
