<script lang="ts">
export default {
  name: 'CustomButton',
};
</script>

<template>
  <button class="button btn"><slot></slot></button>
</template>

<style lang="scss" scoped>
@import './Button.scss';
</style>
