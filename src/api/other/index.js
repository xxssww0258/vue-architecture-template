import request from "../../request/index";

/**
 *
 * @function
 * @param {object} params 参数集合
 * @param {string} params.name - 姓名
 * @param {number} params.age - 年龄
 * @returns {Promise} 返回axios
 * @see  文档地址
 */
export function getUserAjax(params) {
  return request({
    method: "get",
    baseURL: ".",
    url: ".",
    params
  });
}
