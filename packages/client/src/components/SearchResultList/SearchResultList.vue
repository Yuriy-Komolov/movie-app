<style lang="scss" scoped>
@import './SearchResultList.scss';
</style>

<script lang="ts">
import { useCurrentMovie } from '@/stores/selectedMovieStore';

export default {
  name: 'SearchResultList',
  props: {
    movie: Object,
  },

  data() {
    return {};
  },

  methods: {
    setMovieToStore(movie: object | undefined) {
      const bla = useCurrentMovie();

      return bla.setMovie(movie);
    },
  },

  computed: {
    toShortPlot() {
      return this.movie?.Plot?.slice(0, 200);
    },
  },

  watch: {
    movie(val) {
      console.log(val);
    },
  },
};
</script>

<template>
  <ul class="result__list list">
    <li class="result__item">
      <p class="result__subtitle text" v-if="movie?.Error">
        No movie was found
      </p>

      <a
        href="/"
        class="result__link"
        v-on:mousedown="setMovieToStore(movie)"
        v-if="!movie?.Error"
      >
        <h4 class="result__title text">{{ movie?.Title }}</h4>
        <p class="result__subtitle text">
          {{ toShortPlot }}
        </p>
      </a>
    </li>
  </ul>
</template>
