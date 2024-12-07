<template>
  <div>
    <h1 id="introduction"></h1>
    <div class="profession-container">
      <span class="profession" id="profession"></span>
    </div>
    <div class="content">
      <img class="avatar" src="@/assets/webp/avatar.webp" />
      <div>
        <p class="blurb">
          I enjoy creating visually appealing applications that are responsive and accessible for
          everyone.
        </p>
        <p class="blurb">
          This includes building APIs and managing backend systems to ensure everything runs
          smoothly and efficiently.
        </p>
        <ul class="social-list">
          <li>
            <a class="github" :href="github.href" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon :icon="github.icon" />
            </a>
            <font-awesome-icon :icon="['fab', 'github']" />
          </li>
          <li>
            <a class="linkedIn" :href="linkedIn.href" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon :icon="linkedIn.icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { applyTypingEffect } from '@/utilities/text/applyTypingEffect';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(async () => {
      await applyTypingEffect('introduction', `Hi, I'm Chris`, 30);
      await applyTypingEffect('profession', 'Full Stack Developer', 30);
    });
  },
  data() {
    return {
      linkedIn: {
        href: 'https://www.linkedin.com/in/christopher-stolfa-49a4a0178',
        icon: faLinkedin,
      },
      github: {
        href: 'https://github.com/Christopher-Stolfa',
        icon: faGithub,
      },
    };
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
  @include fade-in(2s, 0.5s);
}
.social-list {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
  padding: 0;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  .github {
    color: #333;
  }
  .linkedIn {
    color: #0073b1;
  }
  font-awesome-icon {
    height: 4rem;
    width: 4rem;
  }
}
</style>
