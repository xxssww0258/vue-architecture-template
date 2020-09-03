import Vue from "vue";
const eventBus = new Vue();
export default eventBus;

eventBus.on("click", () => {
  console.log("click");
});
