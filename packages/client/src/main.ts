import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './styles/main.scss';
import components from './UI/index';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(createPinia());
app.use(router);

app.mount('#app');
