<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from './components/Header/HeaderView.vue';
import Footer from './components/Footer/Footer.vue';
</script>

<template>
  <HeaderView />
  <RouterView />
  <Footer />
</template>
