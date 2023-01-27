<script setup lang="ts"></script>

<style scoped lang="scss">
@import './Footer.scss';
</style>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__content">
          <ul class="footer__links-list list">
            <li class="footer__item">
              <a href="" class="footer__link">About</a>
            </li>
            <li class="footer__item">
              <a href="" class="footer__link">Terms of Service</a>
            </li>
            <li class="footer__item">
              <a href="" class="footer__link">Contact</a>
            </li>
          </ul>
          <a href="" class="footer__logo">
            Movie<span class="text-thin">Rise</span>
          </a>
          <div class="footer__socials">
            <SocialsList />
          </div>
        </div>

        <p class="footer__rights">
          Copyright © 2017
          <span class="text-bold">MOVIE</span>
          <span class="text-thin">RISE</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
