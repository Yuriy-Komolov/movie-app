<style lang="scss" scoped>
@import './Tabs.scss';
</style>

<script lang="ts">
import { getMovie } from '../../api/movies';

import type { Tab } from '../../types/Tabs';

export default {
  name: 'Tabs',

  props: {
    tabs: Array as () => Tab[],
    selectedTabId: String,
  },

  data() {
    return {
      movies: [],
    };
  },

  methods: {
    async getMovieFromServer(film: string) {
      const info = await getMovie(film);
      this.movies.push(info);
    },

    getAllMovies() {
      this.chosenTab?.content.forEach((film: string) =>
        this.getMovieFromServer(film)
      );
    },

    switchTab(tab: Tab) {
      this.$emit('test', tab);
    },
  },

  computed: {
    chosenTab() {
      const tab = this.tabs?.find((tab) => tab.id === this.selectedTabId);

      return tab;
    },
  },

  watch: {
    selectedTabId(some) {
      if (some) {
        this.movies = [];

        this.getAllMovies();
      }
    },
  },

  mounted() {
    this.getAllMovies();
  },
};
</script>

<template>
  <ul class="tab-header list">
    <li
      class="tab-header__item"
      :class="{ 'tab-header__item--active': tab.id === selectedTabId }"
      v-for="tab in tabs"
      :key="tab.id"
    >
      <a
        :href="`#${tab.id}`"
        class="tab-header__link"
        @click="switchTab(tab)"
        >{{ tab.title }}</a
      >
    </li>
  </ul>

  <Loader v-if="!movies.length" />
  <CardList :movies="movies" v-if="movies.length" />
</template>
