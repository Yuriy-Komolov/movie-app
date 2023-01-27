<style lang="scss" scoped>
@import './CardList.scss';
</style>

<script lang="ts">
export default {
  name: 'CardList',

  props: {
    movies: [],
  },
};
</script>

<template>
  <ul class="content-list list grid">
    <li class="content-list__item" v-for="movie in movies" :key="movie.imdbID">
      <CardItem :item="movie" />
    </li>
  </ul>
</template>
