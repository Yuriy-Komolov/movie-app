<style scoped lang="scss">
@import './FormInput.scss';
</style>

<script lang="ts">
export default {
  props: {
    label: String,
    type: String,
  },
};
</script>

<template>
  <div class="input">
    <label for="" class="input__label">{{ label }}</label>
    <input :type="type" class="input__item" />
  </div>
</template>
