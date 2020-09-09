<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutItem />
    <SvgIcon iconClass="circle" />
    <div>
      时间： <span> {{ Date.now() | dateFormat }} </span>
    </div>
  </div>
</template>

<script>
import { getUserAjax } from "../../api/user/index";
import { getUserListAjax } from "../../api/other/index";
import AboutItem from "./components/AboutItem";
export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    AboutItem
  },
  mounted() {
    getUserAjax({}).then(res => {
      console.log("getUserAjax\n", res);
    });
    getUserListAjax({}).then(res => {
      console.log("getUserListAjax\n", res);
    });
  }
};
</script>

<style></style>
