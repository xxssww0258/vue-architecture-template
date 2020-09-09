import Vue from "vue";
import SvgIcon from "./SvgIcon"; // svg组件

// register globally https://fontawesome.com/icons?d=gallery&q=globe&m=free
Vue.component("svg-icon", SvgIcon);
Vue.component("SvgIcon", SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext) // eslint-disable-line
const req = require.context("./svg", true, /\.svg$/);
requireAll(req);
