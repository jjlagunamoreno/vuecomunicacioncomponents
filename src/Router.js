import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/Home.vue';
import PadreDeporte from './components/PadreDeporte.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import SumaCheckbox from './components/SumaCheckbox.vue'


const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/numerodoble/:numero?", component: NumeroDoble
    },
    {
        path: "/deportes/:id?", component: PadreDeporte
    },
    {
        path: "/sumacheckbox", component: SumaCheckbox
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;
