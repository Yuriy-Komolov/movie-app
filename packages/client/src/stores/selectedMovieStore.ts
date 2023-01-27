import { defineStore } from 'pinia';

export const useCurrentMovie = defineStore('currentMovie', {
  state: () => ({
    currentMovie: null,
  }),

  actions: {
    setMovie(movie) {
      this.currentMovie = movie;
    },
  },
});
