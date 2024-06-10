<template>
  <div :class="$styles.root">
    <h1>About</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import styles from './styles.module.scss';

export default defineComponent({
  name: 'About',
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
