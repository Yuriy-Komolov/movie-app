<style scoped lang="scss">
@import './Header.scss';
</style>

<script lang="ts">
export default {
  data() {
    return {
      isMenuOpen: false as boolean,
    };
  },

  methods: {
    handleTogle() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a href="/" class="header__logo">
          MOVIE<span class="header__logo-span">rise</span>
        </a>

        <a href="/" class="header__burger" @click="handleTogle" @click.prevent
          ><img
            src="../../assets/icons/burger.svg"
            alt="burger"
            class="header__burger-img"
        /></a>
        <div class="header__controls">
          <SearchForm />

          <a class="header__btn" href="/sign-in">Sign In</a>
          <a class="header__btn" href="/sign-up">Sign Up</a>
        </div>
      </div>
    </div>
  </header>
  <BurgerMenu v-if="isMenuOpen" @handleTogle="handleTogle" />
</template>
