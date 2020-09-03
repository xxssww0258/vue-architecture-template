<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutItem />
    <div>
      时间： <span> {{ Date.now() | dateFormat }} </span>
    </div>
  </div>
</template>

<script>
import { getUserAjax } from "../../api/user/index";
import AboutItem from "./components/AboutItem";
export default {
  name: "About",
  components: {
    AboutItem
  },
  mounted() {
    getUserAjax({}).then(res => {
      console.log("测试request\n" + res);
    });
  }
};
</script>

<style></style>
