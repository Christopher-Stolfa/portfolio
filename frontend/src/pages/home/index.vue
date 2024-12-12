<template>
  <div class="madvillain-square-top"></div>
  <div class="section">
    <span id="introduction" class="introduction"></span>
    <div class="profession-container">
      <span class="profession" id="profession"></span>
    </div>
    <div class="content">
      <div class="avatar-container">
        <img class="avatar" src="@/assets/webp/avatar.webp" />
        <div class="technologies">
          <span>Tech Stacks</span>
          <div class="tech-list">
            <div class="tooltip">
              <svg
                height="1.75rem"
                width="1.75rem"
                color="#3178C6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="TypeScript Logo">
                <path :d="typescriptIconPath" />
              </svg>
              <span class="tooltiptext">TypeScript</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.75rem"
                width="1.75rem"
                color="#3178C6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="JavaScript Logo">
                <path :d="javascriptIconPath" />
              </svg>
              <span class="tooltiptext">JavaScript</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.75rem"
                width="1.75rem"
                color="#61DAFB"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="React.js Logo">
                <path :d="reactIconPath" />
              </svg>
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.75rem"
                width="1.75rem"
                color="#5FA04E"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Node.js Logo">
                <path :d="nodeIconPath" />
              </svg>
              <span class="tooltiptext">Node.js</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.75rem"
                width="1.75rem"
                color="#3776AB"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Python Logo">
                <path :d="pythonIconPath" />
              </svg>
              <span class="tooltiptext">Python</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.75rem"
                width="1.75rem"
                color="#5FA04E"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="MySQL Logo">
                <path :d="sqlIconPath" />
              </svg>
              <span class="tooltiptext">MySQL</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="blurb">
          I am a software engineer with 6 years of experience based in Phoenix and currently working
          on the development of
          <b>Q™</b>
          ,
          <a href="https://www.sparksandhoney.com/" target="_blank" rel="noopener noreferrer"
            ><span class="sparks-pink">s&h&apos;s</span></a
          >
          cultural intelligence platform. I build clean user-friendly applications that focus on
          simplicity and functionality.
        </p>
        <p class="blurb">
          Some of my interests include exploring ways to utilize LLMs in areas such as cuisine and
          music. When I'm not in the matrix, I love cooking Italian recipes and playing drums.
        </p>
      </div>
    </div>
  </div>
  <div class="section">
    <h1>My Work</h1>
    <div class="grid">
      <div class="card">
        <div class="card-image">
          <img alt="Logo" src="/ssa.png" />
        </div>
        <div class="card-body">
          <a href="https://ssa.ccny.cuny.edu/" target="_blank" rel="noopener noreferrer"
            ><h3>Spitzer School of Architecture</h3></a
          >
          <p>
            The Bernard and Anne Spitzer School of Architecture is a renowned institution offering
            innovative architectural education within the City College of New York. I worked with an
            awesome UI designer, Alfonso, to rebuild the landing page and make it beautiful.
          </p>
        </div>
        <div class="card-footer">
          <div class="icon-list">
            <span>Powered By </span>
            <div class="tooltip">
              <svg
                height="1.5rem"
                width="1.5rem"
                color="#3178C6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="TypeScript Logo">
                <path :d="typescriptIconPath" />
              </svg>
              <span class="tooltiptext">TypeScript</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.5rem"
                width="1.5rem"
                color="#61DAFB"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="React.js Logo">
                <path :d="reactIconPath" />
              </svg>
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.5rem"
                width="1.5rem"
                color="#777BB4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Php logo">
                <path :d="phpIconPath" />
              </svg>
              <span class="tooltiptext">Php</span>
            </div>
            <div class="tooltip">
              <font-awesome-icon class="wordpress-icon" :icon="['fab', 'fa-wordpress-simple']" />
              <span class="tooltiptext">Wordpress</span>
            </div>
          </div>
          <a
            class="website-link"
            href="https://ssa.ccny.cuny.edu/"
            target="_blank"
            rel="noopener noreferrer">
            <font-awesome-icon
              class="fontawesome-icon"
              :icon="['fas', 'arrow-up-right-from-square']" />
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img alt="Logo" src="/bdc.png" />
        </div>
        <div class="card-body">
          <a href="https://bertdrobbincompany.com/" target="_blank" rel="noopener noreferrer"
            ><h3>Bert Drobbin Company</h3></a
          >
          <p>
            Bert Drobbin Company provides essential goods, clothing, and appliances to youth
            facilities, shelters, and social service programs across the tri-state area. I created a
            business website with a digital catalog to support inquiry-based sales.
          </p>
        </div>
        <div class="card-footer">
          <div class="icon-list">
            <span>Powered By </span>
            <div class="tooltip">
              <svg
                height="1.5rem"
                width="1.5rem"
                color="#D32F2F"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Firebase Logo">
                <path :d="firebaseIconPath" />
              </svg>
              <span class="tooltiptext">Firebase</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.5rem"
                width="1.5rem"
                color="#61DAFB"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="React.js Logo">
                <path :d="reactIconPath" />
              </svg>
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <svg
                height="1.5rem"
                width="1.5rem"
                color="#3178C6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="JavaScript Logo">
                <path :d="javascriptIconPath" />
              </svg>
              <span class="tooltiptext">JavaScript</span>
            </div>
          </div>
          <a
            class="website-link"
            href="https://bertdrobbincompany.com/"
            target="_blank"
            rel="noopener noreferrer">
            <font-awesome-icon
              class="fontawesome-icon"
              :icon="['fas', 'arrow-up-right-from-square']" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <ul class="social-list">
    <li>
      <a class="github" :href="github.href" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="github.icon" />
      </a>
    </li>
    <li>
      <a class="linkedIn" :href="linkedIn.href" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="linkedIn.icon" />
      </a>
    </li>
  </ul>
  <div class="madvillain-square-bottom"></div>
  <div class="copyright">© 2024</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { applyTypingEffect } from '@/utilities/text/applyTypingEffect';
import {
  siFirebase,
  siTypescript,
  siJavascript,
  siReact,
  siPhp,
  siNodedotjs,
  siMysql,
  siPython,
} from 'simple-icons/icons';

export default defineComponent({
  name: 'Home',
  computed: {
    firebaseIconPath(): string {
      return siFirebase.path;
    },
    typescriptIconPath(): string {
      return siTypescript.path;
    },
    javascriptIconPath(): string {
      return siJavascript.path;
    },
    reactIconPath(): string {
      return siReact.path;
    },
    phpIconPath(): string {
      return siPhp.path;
    },
    nodeIconPath(): string {
      return siNodedotjs.path;
    },
    sqlIconPath(): string {
      return siMysql.path;
    },
    pythonIconPath(): string {
      return siPython.path;
    },
  },
  setup() {
    onMounted(async () => {
      await applyTypingEffect('introduction', `Hi, I'm Chris`, 30);
      await applyTypingEffect('profession', 'Software Engineer', 30);
    });
  },
  data() {
    return {
      linkedIn: {
        href: 'https://www.linkedin.com/in/christopher-stolfa-49a4a0178',
        icon: ['fab', 'linkedin'],
      },
      github: {
        href: 'https://github.com/Christopher-Stolfa',
        icon: ['fab', 'github'],
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.section {
  scroll-snap-align: start;
  padding: 2rem 0 1rem 0;
  &:first-child {
    border-bottom: 1px solid $primary-color;
  }
  @media (min-width: 1024px) {
    height: 100vh;
    padding: 3rem 0 2rem 0;
  }
}
.introduction {
  font-size: 3.2rem;
  font-weight: 700;
  white-space: normal;
  width: inherit;
  @media (max-width: 600px) {
    font-size: 2.4rem;
  }
}
.avatar-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.copyright {
  text-align: center;
  width: 100%;
}
.technologies {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: $plaster;
  color: $primary-color;
  font-weight: 600;
  width: fit-content;
  border: 1.8px solid $secondary-color;
  box-shadow: $primary-box-shadow;
  padding: 0.5rem;
  border-radius: 0.25rem;
}
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
  align-items: center;
  justify-content: center;
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
    font-size: 2.5rem;
    color: #333;
  }
  .linkedIn {
    font-size: 2.5rem;
    color: #0073b1;
  }
  font-awesome-icon {
    height: 4rem;
    width: 4rem;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(17rem, 1fr));
  grid-gap: 3rem;
  padding: 1rem;
  @include fade-in(2s, 0.5s);
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0;
  box-shadow: $primary-box-shadow;
  overflow: hidden;
  min-height: 487px;
}
.card-image {
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  img {
    width: 100%;
    height: auto;
    max-height: 17.25rem;
    display: block;
    object-fit: cover;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.card-body {
  flex: 1;
  padding: 1rem;
  h3 {
    margin: 0;
  }
  a {
    width: fit-content;
    color: $primary-color;
  }
}
.card-footer {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: $plaster;
}
.website-link {
  width: fit-content;
}
.wordpress-icon {
  color: #21759b;
}
.wordpress-icon,
.fontawesome-icon {
  font-size: 1.5rem;
}
.tech-list {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
.icon-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 135%;
  left: 50%;
  margin-left: -60px;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  box-shadow: $primary-box-shadow;
}
.sparks-pink {
  color: $sparks-pink;
}
.madvillain-square-top {
  position: absolute;
  top: 0;
  right: 0;
  width: 7rem;
  height: 7rem;
  background-color: $tertiary-color;
  @media (max-width: 1024px) {
    width: 4rem;
    height: 4rem;
  }
}
.madvillain-square-bottom {
  position: absolute;
  left: 0;
  width: 7rem;
  height: 7rem;
  background-color: $tertiary-color;
  @media (max-width: 1024px) {
    width: 4rem;
    height: 4rem;
  }
}
</style>
