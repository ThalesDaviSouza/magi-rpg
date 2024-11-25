<script setup lang="ts">
import { useRouter } from 'vue-router'
import DefaultBtn from '../components/DefaultBtn.vue'
import { BtnColors } from '../types/Button'

const router = useRouter();

const createSheet = () => {
  router.push({name: 'create'})
}

</script>

<template>
  <section>
    <h1>Seja Bem Vindo!</h1>
    <div class="buttons">
      <div>
        <DefaultBtn text="Criar Ficha" @clicked="createSheet" />
      </div>
      <div>
        <DefaultBtn text="Carregar Ficha" @clicked="console.log('Carregar Ficha')" />
      </div>
    </div>
  </section>

</template>

<style scoped>
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-bottom: 120px;
  }

  h1{
    font-size: 56px;
  }

  .buttons{
    width: 50%;
    height: 174px;
    font-size: 32px;
  }

  .buttons > div{
    margin-bottom: 12px;
    height: 46%;
  }

</style>
