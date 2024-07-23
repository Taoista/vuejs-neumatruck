import { createRouter, createWebHistory } from 'vue-router'
import Contador from '../modules/contador/components/Contador.vue';
import ListaDeTareas from '../modules/listaDeTareas/components/ListaDeTareas.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/contador',
      name: 'contador',
      component: Contador
    },
    {
      path: '/lista-de-tareas',
      name: 'lista de tareas',
      component: ListaDeTareas
    }
  ]
})

export default router
