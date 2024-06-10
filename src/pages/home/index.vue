<template>
  <div :class="$styles.root">
    <h1>Hi, I am Chris</h1>
    <p>Software Developer</p>
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
