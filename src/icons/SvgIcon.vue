<template>
  <svg class="svg-icon">
    <use :xlink:href="iconName" />
  </svg>
  <!-- demo -->
  <!-- <svg-icon class-name="international-icon" icon-class="language" /> -->
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    }
  }
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  /* 实际上不是完全得垂直于文本 */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
