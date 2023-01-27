<style scoped lang="scss">
@import './CardItem.scss';
</style>

<script lang="ts">
export default {
  name: 'CardItem',

  props: {
    item: Object,
  },

  data() {
    return {
      active: true,
    };
  },

  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },

  computed: {},
};
</script>

<template>
  <div class="card" :style="{ backgroundImage: 'url(' + item?.Poster + ')' }">
    <div class="card__hover" v-if="active">
      <a href="#" class="card__hover-watch">
        <img
          src="../../assets/icons/play-button.svg"
          alt="Play"
          class="card__hover-img"
        />
        Watch now
      </a>

      <button class="card__hover-btn" @click="toggleActive">View info</button>
    </div>

    <div class="card__content" v-if="active">
      <div class="card__info">
        <h3 class="card__title text">{{ item?.Title }}</h3>
        <p class="card__rate">{{ item?.imdbRating }}</p>
      </div>

      <p class="card__genres text">{{ item?.Genre }}</p>
    </div>

    <div class="card-active" v-if="!active">
      <div class="card__header">
        <button class="card-active__cross-btn btn" @click="toggleActive">
          <img src="../../assets/icons/cross.svg" alt="cross" />
        </button>

        <ButtonFavorites />
      </div>
      <div class="card__info">
        <h3 class="card__title card-active__title text">{{ item?.Title }}</h3>
        <p class="card__rate">{{ item?.imdbRating }}</p>
      </div>

      <p class="card__genres text">{{ item?.Genre }}</p>
      <p class="card-active__plot text">{{ item?.Plot }}</p>
      <CustomButton>Watch now</CustomButton>
    </div>
  </div>
</template>
