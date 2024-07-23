<template>
    <div>
        <h2>Lista de Tareas</h2>
        <strong>Cantidad de tareas {{ totalTareas }}</strong><br>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{ item }}
                <button @click="borrarTarea(index)">Eliminar</button>
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


    const borrarTarea = (index) =>{
        tareas.value.splice(index, 1);
    }


</script>
  
<style scoped></style>
  