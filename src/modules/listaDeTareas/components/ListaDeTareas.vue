<template>
    <div>
        <h2>Lista de Tareas</h2>
        <strong>Cantidad de tareas {{ totalTareas }}</strong><br>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{ item }}
<<<<<<<< HEAD:src/modules/listDeTareas/components/ListaDeTareas.vue
                <button @click="borrarTarea(index)">Eliminar</button>
========
                <button @click="deleteTarea(index)">Eliminar</button>
>>>>>>>> c954e695fdbe1a56bdc5548be8b1052f4ded45d6:src/modules/listaDeTareas/components/ListaDeTareas.vue
            </li>
        </ul>
    </div>
</template>
  
<script setup>

    import { ref } from 'vue';

    const tareas = ref([]);
    const nuevaTarea = ref('');

    let totalTareas = ref(tareas.value.length);



    const addTarea = () =>{
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = '';
        // totalTareas.value = tareas.value.lenght;
        totalTareas.value = tareas.value.length;
        // console.log(tareas.value.length)
    }


<<<<<<<< HEAD:src/modules/listDeTareas/components/ListaDeTareas.vue
    const borrarTarea = (index) =>{
========
    const deleteTarea = (index) => {
>>>>>>>> c954e695fdbe1a56bdc5548be8b1052f4ded45d6:src/modules/listaDeTareas/components/ListaDeTareas.vue
        tareas.value.splice(index, 1);
    }


<<<<<<<< HEAD:src/modules/listDeTareas/components/ListaDeTareas.vue
========

>>>>>>>> c954e695fdbe1a56bdc5548be8b1052f4ded45d6:src/modules/listaDeTareas/components/ListaDeTareas.vue
</script>
  
<style scoped></style>
  