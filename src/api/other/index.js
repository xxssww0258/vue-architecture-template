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
export function getUserListAjax(params) {
  return request({
    method: "get",
    baseURL: ".",
    url: "/api/getUserList",
    params
  });
}

export const getUserListAjaxMock = [
  "./api/getUserList",
  "get",
  {
    state: 1,
    errCode: 200,
    errMsg: null,
    "data|4": [
      {
        name: "@name",
        token: "@string"
      }
    ]
  }
];
