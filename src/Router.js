import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/Home.vue'
import PadreDeporte from './components/PadreDeporte.vue'
import PadreNumeros from './components/PadreNumeros.vue'
import ComicsComponent from './components/ComicsComponent.vue'
import SeleccionMultiple from './components/SeleccionMultiple.vue'
import SumaCheckbox from './components/SumaCheckbox.vue'
import NumeroDoble from './components/NumeroDoble.vue'
import TablaMultiplicar from './components/TablaMultiplicar.vue'
 
//CREAMOS UNA CONSTANTE ARRAY PARA LA RUTA
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/padredeporte", component: PadreDeporte },
    { path: "/padrenumeros", component: PadreNumeros },
    { path: "/comics", component: ComicsComponent },
    { path: "/seleccionmultiple", component: SeleccionMultiple },
    { path: "/sumacheckbox", component: SumaCheckbox },
    { path: "/numerodoble/:numero?", component: NumeroDoble },
    { path: "/tablamultiplicar/:numero?", component: TablaMultiplicar },
]
 
//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EN EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENRO DE Main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
 
//POR ULTIMO EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;