//  这里和 middleware 是有思想上的区别 这里主要是用来全局挂挂载方法
import Vue from "vue";
import toTop from "./toTop";

Vue.mixin({
  methods: {
    toTop
  }
});
