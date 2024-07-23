<template>
    <div class="sidebar">
        <h2 class="h2-title">Barra lateral</h2>
        <ul>
            <li><router-link to="/contador">Contador</router-link></li>
            <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style>

    .sidebar{
        width: 300px;
        background-color: blanchedalmond;
        padding: 20px;
    }

    .h2-title{
        color: black;
    }


</style>