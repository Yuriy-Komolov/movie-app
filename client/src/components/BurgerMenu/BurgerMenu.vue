<style lang="scss" scoped>
@import './BurgerMenu.scss';
</style>

<script lang="ts">
export default {
  name: 'BurgerMenu',

  props: {
    // handleTogle,
  },

  methods: {
    handleTogle() {
      this.$emit('handleTogle');
    },
  },
};
</script>

<template>
  <div class="burger-menu">
    <div class="container">
      <a
        href="/"
        class="burger-menu__header"
        @click="handleTogle"
        @click.prevent
      >
        <img
          src="../../assets/icons/cross.svg"
          alt=""
          class="burger-menu__cross"
        />
      </a>

      <div class="burger-menu__inner">
        <a href="" class="burger-menu__logo">
          Movie<span class="text-thin">Rise</span>
        </a>

        <div class="burger-menu__controls">
          <!-- <SearchForm /> -->

          <CustomButton>
            <a href="/sign-in"> Sign In </a>
          </CustomButton>
          <CustomButton>
            <a href="/sign-up">Sign Up</a>
          </CustomButton>
        </div>

        <SocialsList />
      </div>
    </div>
  </div>
</template>
