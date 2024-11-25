<script setup lang="ts">
  import { ref } from "vue";
  import DefaultBtn from '../components/DefaultBtn.vue'
  import { 
        BtnColors, 
        BtnFontColors,
    }     
    from '../types/Button';
  
  enum stages{
    atributes = 1,
    phenomena,
    affinity,
    bio
  };
  
  console.log(stages.atributes)


  const actualValueStage = ref(stages.atributes);


  const isActive = (stage:stages):boolean => {
    return actualValueStage.value >= stage;
  }

</script>

<template>
  <section>
    <nav>
      <div class="stage">
        <DefaultBtn text="Atributos" @clicked="console.log('Atributos')" 
          :isActive="isActive(stages.atributes)"
        />
      </div>
      <div class="bar"></div>
      <div class="stage">
        <DefaultBtn text="Fenômenos" @clicked="console.log('Fenômenos')" 
          :isActive="isActive(stages.phenomena)"
        />
      </div>
      <div class="bar"></div>
      <div class="stage">
        <DefaultBtn text="Afinidade Elemental" @clicked="console.log('Afinidade Elemental')" 
          :isActive="isActive(stages.affinity)"
        />
      </div>
      <div class="bar"></div>
      <div class="stage">
        <DefaultBtn text="Bio" @clicked="console.log('Bio')" 
          :isActive="isActive(stages.bio)"
        />
      </div>
    </nav>
  </section>
</template>

<style scoped>
  nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  nav .bar{
    background-color: var(--background-secondary);
    padding: 4px;
    width: 60px;
    border-radius: 0;
  }
  nav .stage{
    font-size: 20px;
    text-align: center;
    height: 40px;
    width: 220px;

  }
  nav .stage.active {
    background: var(--font-color);
  }
</style>
