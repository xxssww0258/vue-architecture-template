<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutItem />
    <SvgIcon iconClass="circle" />
    <div>
      时间： <span> {{ Date.now() | dateFormat }} </span>
    </div>
    <button @click="handleSignIn">登录</button>
    <button @click="handleSignOut">退出登录</button>
  </div>
</template>

<script>
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
  methods: {
    handleSignIn() {
      this.$store.dispatch("signIn").then(res => {
        console.log("登录成功:", res);
      });
    },
    handleSignOut() {
      this.$store.dispatch("signOut").then(() => {
        console.log("退出成功");
      });
    }
  },
  mounted() {
    getUserListAjax({}).then(res => {
      console.log("getUserListAjax\n", res);
    });
  }
};
</script>

<style></style>
