import Vue from "vue";
import { dateFormat, relativeDate } from "./date.js";

Vue.filter("dateFormat", dateFormat);
Vue.filter("relativeDate", relativeDate);
