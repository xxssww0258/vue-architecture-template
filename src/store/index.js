import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";
import { USER_EXPIRES_DAY, USER_EXPIRES, USER, TOKEN } from "../config";
import { signInAjax } from "../api/user";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    [USER]: null,
    [TOKEN]: null
  },
  mutations: {
    update(state, data) {
      for (let key in data) {
        state[key] = data[key];
      }
    },
    remove(state, arr) {
      arr.map(key => (state[key] = null));
    }
  },
  actions: {
    // 登录
    async signIn(context) {
      let user = await signInAjax({});
      let token = user.token;
      context.commit("update", { user, token });
      Cookies.set(USER_EXPIRES, "true", { expires: USER_EXPIRES_DAY });
      localStorage.setItem(USER, JSON.stringify(user));
      localStorage.setItem(TOKEN, JSON.stringify(token));
      return user;
    },
    // 退出登录
    async signOut(context) {
      context.commit("remove", [USER, TOKEN, USER_EXPIRES]);
      Cookies.remove(USER_EXPIRES);
      localStorage.removeItem(USER);
      localStorage.removeItem(TOKEN);
    }
  },
  modules: {}
});
