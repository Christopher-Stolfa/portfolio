<template>
  <nav :class="$styles.root">
    <router-link to="/">Home</router-link>
    <router-link to="/work">Work</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import styles from './styles.module.scss';

export default defineComponent({
  name: 'Navigation',
  computed: {
    $styles() {
      return styles;
    },
  },
  setup() {
    const router = useRouter();

    const goToHome = () => {
      router.push('/');
    };

    return {
      goToHome,
      $styles: styles,
    };
  },
});
</script>
