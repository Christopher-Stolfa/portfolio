<template>
  <div :class="$styles.container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import styles from './styles.module.scss';

export default defineComponent({
  name: 'Home',
  props: {
    msg: String,
  },
  computed: {
    $styles() {
      return styles;
    },
  },
});
</script>
