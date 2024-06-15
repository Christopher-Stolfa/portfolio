<template>
  <div>
    <h1 id="introduction"></h1>
    <div class="profession-container">
      <span class="profession" id="profession"></span>
    </div>
    <div class="content">
      <img class="avatar" src="@/assets/webp/avatar.webp" />
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
      await applyTypingEffect('introduction', `Hi, I'm Chris`, 30);
      await applyTypingEffect('profession', 'Full Stack Developer', 30);
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
.blurb {
  font-size: 1.5rem;
  white-space: normal;
  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
}
.blurb,
.avatar {
  @include fade-in(2s, 0.5s);
}
.avatar {
  display: block;
  height: 20rem;
  width: auto;
  transition: transform 0.3s ease;
}
.content {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
}
</style>
