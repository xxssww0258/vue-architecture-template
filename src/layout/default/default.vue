<template>
  <div>
    <Header></Header>
    <main>
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="CACHE_VIEWS">
          <router-view />
        </keep-alive>
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./footer";
import Header from "./header";
import { CACHE_VIEWS } from "../../config";
export default {
  components: { Header, Footer },
  data: function() {
    return {
      CACHE_VIEWS
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style></style>
