import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// const response = await openai.listEngines();
createApp(App).use(store).use(router).mount('#app');
