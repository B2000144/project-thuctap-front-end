import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
window.axios = axios;


import router from "./router";
const app = createApp(App).use(router);
app.mount("#app");
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Cookies from "js-cookie";
