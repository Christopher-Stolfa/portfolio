<template>
  <div :class="$styles.root">
    <h1>Hi, I'm Chris</h1>
    <div :class="$styles.roleContainer">
      <span :class="$styles.role">Full Stack Developer</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import styles from './styles.module.scss';

export default defineComponent({
  name: 'Home',
  props: {
    type: String,
  },
  computed: {
    $styles() {
      return styles;
    },
  },
});
</script>
