<template>
  <div :class="$styles.root">
    <h1>Work</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Work',
  props: {
    type: String,
  },
});
</script>
