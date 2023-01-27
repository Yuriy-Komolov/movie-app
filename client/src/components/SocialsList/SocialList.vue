<script lang="ts">
export default {
  name: 'SocialsList',
};
</script>

<style lang="scss" scoped>
@import './SocialsList.scss';
</style>

<template>
  <ul class="socials__list list">
    <li class="socials__item">
      <a href="" class="socials__link">
        <img
          src="../../assets/icons/fb.svg"
          alt="Facebook"
          class="socials__icon"
        />
      </a>
    </li>
    <li class="socials__item">
      <a href="" class="socials__link">
        <img
          src="../../assets/icons/twitter.svg"
          alt="Twitter"
          class="socials__icon"
        />
      </a>
    </li>
    <li class="socials__item">
      <a href="" class="socials__link">
        <img
          src="../../assets/icons/pinterest.svg"
          alt="Pinterest"
          class="socials__icon"
        />
      </a>
    </li>
    <li class="socials__item">
      <a href="" class="socials__link">
        <img
          src="../../assets/icons/instagram.svg"
          alt="Instagram"
          class="socials__icon"
        />
      </a>
    </li>
    <li class="socials__item">
      <a href="" class="socials__link">
        <img
          src="../../assets/icons/youtube.svg"
          alt="Instagram"
          class="socials__icon"
        />
      </a>
    </li>
  </ul>
</template>
