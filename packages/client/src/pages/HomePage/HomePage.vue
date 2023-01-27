<style scoped lang="scss">
@import './HomePage.scss';
</style>

<script lang="ts">
import type { Tab } from '@/types/Tabs';
import { films } from '../../utils/constants';

export default {
  data() {
    return {
      tabs: films,
      selectedTab: films[0],
    };
  },

  methods: {
    changeTab(tab: Tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab);
    },
  },
};
</script>

<template>
  <main class="main">
    <IntroSection />

    <section class="trending__section">
      <div class="container">
        <Tabs :selectedTabId="selectedTab.id" :tabs="tabs" @test="changeTab" />
      </div>
    </section>
  </main>
</template>
