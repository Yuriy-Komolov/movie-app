<style lang="scss" scoped>
@import './IntroSection.scss';
</style>

<script lang="ts">
import { getMovie } from '@/api/movies';
import { useCurrentMovie } from '@/stores/selectedMovieStore';
import { mapState } from 'pinia';

import { recommendedFilm } from '../../utils/constants';

export default {
  name: 'IntroSection',

  data() {
    return {
      movies: {} as Object | null,
    };
  },

  setup() {
    const selectedMovie = useCurrentMovie();

    return { selectedMovie };
  },

  methods: {
    async getMovieFromServer(film: string) {
      try {
        const info = await getMovie(film);
        this.movies = info;
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    getGenres() {
      return this.movies?.Genre?.split(',');
    },

    ...mapState(useCurrentMovie, ['currentMovie']),
  },

  watch: {
    currentMovie(newValue) {
      this.movies = newValue;
    },
  },

  mounted() {
    this.getMovieFromServer(recommendedFilm);
  },
};
</script>

<template>
  <section
    class="home-page__section"
    v-bind:style="{ backgroundImage: 'url(' + movies?.Poster + ')' }"
  >
    <div class="container">
      <div class="home-page__inner">
        <h1 class="home-page__title text">{{ movies?.Title }}</h1>
        <div class="home-page__info">
          <ul class="home-page__genres list">
            <li class="home-page__item" v-for="genre in getGenres" :key="genre">
              <p class="home-page__genre">
                {{ genre }}
              </p>
            </li>
          </ul>

          <p class="home-page__duration">{{ movies?.Runtime }}</p>
        </div>
        <div class="home-page__ratings">
          <ul class="home-page__stars list">
            <li class="home-page__star">
              <img
                src="../../assets/icons/star.svg"
                alt=""
                class="home-page__star-icon"
              />
            </li>
            <li class="home-page__star">
              <img
                src="../../assets/icons/star.svg"
                alt=""
                class="home-page__star-icon"
              />
            </li>
            <li class="home-page__star">
              <img
                src="../../assets/icons/star.svg"
                alt=""
                class="home-page__star-icon"
              />
            </li>
            <li class="home-page__star">
              <img
                src="../../assets/icons/star.svg"
                alt=""
                class="home-page__star-icon"
              />
            </li>
            <li class="home-page__star">
              <img
                src="../../assets/icons/star.svg"
                alt=""
                class="home-page__star-icon"
              />
            </li>
          </ul>
          <p class="home-page__rate">{{ movies?.imdbRating }}</p>
        </div>

        <p class="home-page__plot">
          {{ movies?.Plot }}
        </p>
        <div class="home-page__controls">
          <CustomButton>Watch now</CustomButton>
          <!-- <CustomButton>View Info</CustomButton> -->
          <ButtonFavorites />
        </div>
      </div>
    </div>
  </section>
</template>
