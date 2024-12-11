// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin, faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLinkedin, faArrowUpRightFromSquare, faWordpressSimple);
const app = createApp(App, FontAwesomeIcon);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
