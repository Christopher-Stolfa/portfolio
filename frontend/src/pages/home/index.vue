<template>
  <div>
    <h1>Hi, I'm Chris</h1>
    <div class="profession-container">
      <span class="profession" id="profession"></span>
    </div>
    <div class="blurb-container">
      <p class="blurb" id="blurb">
        I enjoy creating websites that are both beautiful and functional. My focus is on building
        responsive and accessible sites that work well for everyone.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { applyTypingEffect } from '@/utilities/text/applyTypingEffect';

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(async () => {
      await applyTypingEffect('profession', 'Full Stack Developer', 50);
    });
  },
});
</script>

<style lang="scss" scoped>
.profession {
  font-size: 3.2rem;
  font-weight: 700;
  color: $accent-color-1;
  white-space: normal;
  width: inherit;
  @media (max-width: 600px) {
    font-size: 2.4rem;
  }
}
.profession-container {
  width: fit-content;
}
.blurb-container {
  margin: 4rem 0;
  padding-right: 20%;
}
.blurb {
  font-size: 1.5rem;
  white-space: normal;
}
</style>
