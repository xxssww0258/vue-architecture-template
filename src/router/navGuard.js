// import store from '../store'
import _ from "lodash";

const whiteList = ["/login"]; // 不重定向白名单

let setTestUserOnce = _.once(_setTestUser);
function _setTestUser() {
  // 赋值用户信息
}

let userVerificationOnce = _.once(_userVerification);

function _userVerification() {
  // ---------------------------------------- 期限校验 ----------------------------------------
  // ---------------------------------------- 更新用户信息 ----------------------------------------
}

/**
 * 添加路由守卫
 * @export
 * @param {*} router
 */
export default function navGuard(router) {
  console.log("路由表:", router);
  // + 测试用户
  // + 已登陆
  //   + 校验期限
  //       + 推出重新登陆
  //   + 更新用户信息(第一次)
  //   + 校验权限
  //       + 白名单
  //           + 进入页面
  //       + 无权限页面
  // + 未登陆
  //   + 白名单
  //       + 进入页面
  //   + 跳转登陆
  //       + 记录上一页
  //       + 登陆成功,判断上一页是否有权限进入,回到上一页,删除记录

  router.beforeEach((to, from, next) => {
    switch (true) {
      // ---------------------------------------- 免登陆(默认登录测试用户,用于开发时减少登录) ----------------------------------------
      case process.env.FREE_LOGIN === true &&
        process.env.NODE_ENV !== "production":
        console.warn("注意!启动了免登录");
        console.warn("注意!启动了免登录");
        console.warn("注意!启动了免登录");
        setTestUserOnce(); // 赋值测试用户信息(一次性)
        break;
      // ---------------------------------------- 第三方登录 ----------------------------------------
      case false:
        userVerificationOnce();
        break;
      // ---------------------------------------- 已登录 ----------------------------------------
      case "":
        userVerificationOnce();
        break;
      // ---------------------------------------- 未登陆 ----------------------------------------
      default:
    }
    // ---------------------------------------- 白名单 ----------------------------------------
    if (whiteList.includes(to.path)) {
      return next();
    }
    // ---------------------------------------- 权限和角色判断 ----------------------------------------
    // 如果权限是根据角色走 就判断角色
    // 如果权限是独立的 就根据 接口请求 判断是否允许进入页面，最好做持久化存储用户权限
    // next("/");
    next();
  });

  // 结束Progress
  router.afterEach(() => {});

  // 解决 浏览器长时间不关 更新网站后 异步组件代码差异
  router.onError(error => {
    const pattern = /Loading chunk [\w-]*? failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    // 'Loading chunk chunk-e618b7d2 failed.'
    if (isChunkLoadFailed) {
      window.location.reload(true);
    }
  });
}
