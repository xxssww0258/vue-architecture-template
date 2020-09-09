// ======================================== 这里可以定义另一种接口情况 ========================================
import axios from "axios";
// import { OTHER_HOST } from "../config";
const AUTH_TOKEN = "xxx";
const webAxios = axios.create({
  timeout: 5000,
  // baseURL: OTHER_HOST, // 一般来说不设置 用本地部署
  validateStatus(status) {
    // 如果接口返回符合如下就返回resolve否则reject
    return status >= 200 && status < 300; // 默认的  根据后台处理
  },
  headers: {
    Authorization: AUTH_TOKEN
  }
});

// ---------------------------------------- 请求处理 ----------------------------------------
webAxios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// ---------------------------------------- 相应处理 ----------------------------------------
webAxios.interceptors.response.use(
  function(response) {
    let data = response.data;
    // 这里用来统一 不同的后端返回的数据类型
    // 有些后端喜欢返回错 data.errCode  有些喜欢返回 http.status
    if (data.isSuccess === 1) {
      return Promise.reject("error");
    }
    return data; //  改写  data 后就能直接通过 response 获取data了
  },
  function(error) {
    // 统一的错误 回馈 一般弹窗口
    alert(error);
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default webAxios;
