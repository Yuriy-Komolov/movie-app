<template>
  <div className="loader">
    <ul className="loader__img">
      <li></li>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
    <p className="loader__text title title--m text-reset">Loading...</p>
  </div>
</template>

<script lang="ts">
export default { name: 'Loader' };
</script>

<style lang="scss" scoped>
@import './Loader.scss';
</style>
