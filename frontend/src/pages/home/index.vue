<template>
  <h1>Hi, I'm Chris</h1>
  <div class="role-container">
    <span class="role">Full Stack Developer</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style lang="scss" scoped>
.role {
  @include typing-effect(2s);
  font-size: 3.2rem;
  font-weight: 700;
  color: $accent-color-1;
}
.role-container {
  width: fit-content;
}
</style>
