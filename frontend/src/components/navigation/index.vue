<template>
  <div class="page-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Navigation',
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  flex-wrap: nowrap;
  gap: 1rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  padding: 0 10% 0 0;
  text-decoration: none;
  white-space: nowrap;
  z-index: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.navbar.scrolled {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.page-container {
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(300px);
  scroll-snap-type: y mandatory;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 4rem;
  @media (max-width: 600px) {
    padding: 0 2rem;
  }
}
</style>
