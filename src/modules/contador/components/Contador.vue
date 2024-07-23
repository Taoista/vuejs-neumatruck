<template>
    <strong>Ejemplo con VUE</strong><br>
    <p>{{ contador }}</p>
  
    <button @click="incrementar">incrementar</button>
  
    <button @click="restart">Resar</button>
  
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const contador = ref(0)
    
    const incrementar = () => {
      contador.value++
    }
  
    const restart = () => {
      
      if(contador.value==0){
        return false;
      }
  
      contador.value--
    }
  
  </script>
  
  <style scoped>
    p{
      color: red;
    }
  </style>
  