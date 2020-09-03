import Vue from "vue";
import VueI18n from "vue-i18n";
import zhCN from "./zh-CN";
import enUS from "./en-US";
import dayjs from "dayjs";

Vue.use(VueI18n);

const messages = {
  "zh-CN": {
    ...zhCN
    // ...自定义
  },
  "en-US": {
    ...enUS
    // ...自定义
  }
};

// 实际上 不同浏览器 navigator.language 并不一致 可能存在取不到默认值情况下
const locale = messages[navigator.language] ? navigator.language : "zh-CN"; // 设置语言

export const i18n = new VueI18n({
  locale,
  messages // 语言包
});

// i18n.locale = 'en-US'

dayjs.locale(locale);
