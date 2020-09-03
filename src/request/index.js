import axios from "axios";
const AUTH_TOKEN = "xxx";
import { HOST } from "../config";
const request = axios.create({
  // baseURL:'/mark', // 这里可以做个标识 在 http-proxy-middleware 以这个标识做转发
  // 为什么不采用 /api/* 作为标识转发  因为这台node服务器 可能同时部署另一个前端项目 也需要做转发 所以要自定义标识
  timeout: 5000,
  baseURL: HOST, // 一般来说不设置 用本地部署
  validateStatus(status) {
    // 如果接口返回符合如下就返回resolve否则reject
    return status >= 200 && status < 300; // 默认的  根据后台处理
  },
  headers: {
    common: {
      Authorization: AUTH_TOKEN
    }
  }
});

// ---------------------------------------- 请求处理 ----------------------------------------
request.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么, 这里会得到 请求超时之类的
    return Promise.reject(error);
  }
);

// ---------------------------------------- 相应处理 ----------------------------------------
request.interceptors.response.use(
  function(response) {
    let data = response.data;
    // 这里用来统一 不同的后端返回的数据类型
    // 因为后端喜欢用200来返回数据 所以这里用来统一后端处理结果 有些后端喜欢用 data.errCode  有些喜欢返回 http.status
    if (data.isSuccess === 1) {
      return Promise.reject(Error("error"));
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

export default request;
