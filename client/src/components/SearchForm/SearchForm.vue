<style lang="scss" scoped>
@import './SearchForm.scss';
</style>

<script lang="ts">
import { getMovie } from '@/api/movies';
// import { debounce } from '@/utils/debounce';

export default {
  name: 'SearchForm',

  data() {
    return {
      inputSearch: '',
      movie: null as object | null,
      debounce: undefined as ReturnType<typeof setTimeout> | undefined,
    };
  },

  methods: {
    inputHandler(event: Event) {
      clearTimeout(this.debounce);

      this.debounce = setTimeout(() => {
        // const target = <HTMLInputElement>event.target;
        const target = event.target as HTMLInputElement;
        this.inputSearch = target.value;
      }, 600);
    },

    onBlur() {
      this.inputSearch = '';
      this.movie = null;
    },
  },

  watch: {
    async inputSearch(el) {
      try {
        const movieFromApi = await getMovie(el);
        this.movie = movieFromApi;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <form action="" class="search__form" @submit.prevent>
    <div class="search__input-wrapper">
      <img
        src="../../assets/icons/scope.svg"
        alt="scope"
        class="search_scope-image"
      />
    </div>
    <input
      type="text"
      class="search__input"
      placeholder="Search"
      v-bind:value="inputSearch"
      @input="inputHandler"
      @blur="onBlur"
    />

    <SearchResultList :movie="movie" v-if="inputSearch" />
  </form>
</template>
