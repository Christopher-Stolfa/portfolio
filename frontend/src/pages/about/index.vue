<template>
  <div class="content">
    <p>I&apos;m a software developer with ten years of front-end engineering experience.</p>
    <p>
      I&apos;m passionate about technology and exploring creative ways it intersects with my other
      abiding interests (e.g., recently I&apos;ve been exploring applications of generative AI in
      music, cooking, and gaming).
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  props: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.content {
  margin-top: 15%;
  font-size: 1.5rem;
}
</style>
