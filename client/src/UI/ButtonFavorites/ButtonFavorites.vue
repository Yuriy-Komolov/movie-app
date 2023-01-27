<template>
  <button class="favorites-btn btn">Favorites</button>
</template>

<script lang="ts">
export default {
  name: 'ButtonFavorites',
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.favorites-btn {
  display: flex;
  align-items: center;
  line-height: 120%;
  padding: 8px 8px 8px 26px;
  color: #fff;
  background-color: transparent;
  letter-spacing: 1.12px;
  border-radius: 8px;
  border: none;
  position: relative;
  border: 1px solid transparent;

  &::before {
    content: '';
    height: 12px;
    width: 12px;
    background: url('../../assets/icons/plus.svg');
    background-size: contain;
    position: absolute;
    left: 6px;
    z-index: 10;
  }

  @include hover(border, 1px solid #fff);
}
</style>
