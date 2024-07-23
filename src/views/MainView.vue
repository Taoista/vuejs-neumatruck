<template>  
    <div class="container">
        
        <Siderbar></Siderbar>

        <div class="context">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    
    import Siderbar from '../components/Sidevar.vue';

</script>

<style>
    .container{
        display: flex;
    }

    .context{
        flex: 1;
        padding: 20px;
    }

</style>