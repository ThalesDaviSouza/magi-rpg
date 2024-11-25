<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
    <RouterView />
  </main>
  <footer>
    <router-link href="https://docs.google.com/document/d/1kM41livHqtgm2o02FBfj41WW6i58Ba-YR7snCijhHBk/edit?usp=sharing" 
                target="_blank" 
                style="text-decoration: none;"
    >
      <span>Magi RPG</span>
    </router-link>
    
    <router-link to="/about" style="text-decoration: none;">
      <span>Mais Sobre</span>
    </router-link>
  </footer>
</template>

<style scoped>
  main{
    min-height: 90vh;
    display: flex;
  }
  main section{
    width: 100%;
  }

  footer{
    position: relative;
    left: 0;
    bottom: 0;

    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;

    padding-bottom: 10px;
  }

  footer span{
    padding: 14px;
    font-size: 26px;
    font-weight: bold;
    color: var(--font-color);
    
  }
 
</style>
