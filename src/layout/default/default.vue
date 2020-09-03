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
import { routes } from "../../router";
import { CACHE_VIEWS } from "../../config";
export default {
  components: { Header, Footer },
  data: function() {
    return {
      CACHE_VIEWS
    };
  },
  methods: {
    digui(arr) {
      return arr.map(x => {
        if (x.children) {
          return this.digui(x.children);
        }
        return [x];
      });
    }
  },
  mounted() {
    console.log(routes);
    console.log(routes.flatMap(x => x.children));
    console.log(this.$store);
  }
};
</script>

<style></style>
