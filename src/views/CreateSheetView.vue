<script setup lang="ts">
  import { computed, ref } from "vue";
  import DefaultBtn from '../components/DefaultBtn.vue'
  import AttributesForm from '../components/createSheet/AttributesForm.vue'
  import { 
        BtnColors, 
        BtnFontColors,
    }     
    from '../types/Button';
  
  enum stages{
    attributes = 1,
    phenomena,
    affinity,
    bio
  };
  
  const actualStage = ref(stages.attributes);


  const isActive = (stage:stages):boolean => {
    return actualStage.value >= stage;
  }

  const jumpToStage = (stage:stages):void => {
    actualStage.value = stage;
  }

  const nextStage = () => {
    actualStage.value++;
  }

  const previousStage = () => {
    actualStage.value--;
  }

  const isAttributesActive = computed(() => {
    return actualStage.value >= stages.attributes;
  });

  const isPhonemaActive = computed(() => {
    return actualStage.value >= stages.phenomena;
  });

  const isAffinityActive = computed(() => {
    return actualStage.value >= stages.affinity;
  });

  const isBioActive = computed(() => {
    return actualStage.value >= stages.bio;
  });

  const canGoBack = computed(() => {
    return actualStage.value != stages.attributes;
  });

  const canGoAhead = computed(() => {
    return actualStage.value != stages.bio;
  });

</script>

<template>
  <section>
    <nav>
      <div class="stage">
        <DefaultBtn text="Atributos" @clicked="jumpToStage(stages.attributes)" 
          :isActive="isAttributesActive"
          :key="isAttributesActive"
        />
      </div>
      <div class="bar" :class="{active: isPhonemaActive}"></div>
      <div class="stage">
        <DefaultBtn text="Fenômenos" @clicked="jumpToStage(stages.phenomena)" 
        :isActive="isPhonemaActive"
        :key="isPhonemaActive"
        />
      </div>
      <div class="bar" :class="{active: isAffinityActive}"></div>
      <div class="stage">
        <DefaultBtn text="Afinidade Elemental" @clicked="jumpToStage(stages.affinity)" 
          :isActive="isAffinityActive"
          :key="isAffinityActive"
        />
      </div>
      <div class="bar" :class="{active: isBioActive}"></div>
      <div class="stage">
        <DefaultBtn text="Bio" @clicked="jumpToStage(stages.bio)" 
          :isActive="isBioActive"
          :key="isBioActive"
        />
      </div>
    </nav>
    <div v-show="actualStage == stages.attributes">
      <AttributesForm />
    </div>
    <div v-show="actualStage == stages.phenomena">phenomena</div>
    <div v-show="actualStage == stages.affinity">affinity</div>
    <div v-show="actualStage == stages.bio">Bio</div>
    
    <div class="navigation">
      <div class="navigation_btn">
        <DefaultBtn text="Anterior" @clicked="previousStage" 
        :isActive="canGoBack"
        :key="canGoBack"
        />
      </div>
      <div class="navigation_btn">
        <DefaultBtn text="Próximo" @clicked="nextStage" 
        v-show="canGoAhead"
        :isActive="canGoAhead"
        :key="canGoAhead"
        />

        <DefaultBtn text="Finalizar" @clicked="console.log('terminar')" 
        v-show="!canGoAhead"
        :isActive="!canGoAhead"
        :key="canGoAhead"
        />
      </div>
      
    </div>
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

    transition: all 0.32s;
  }
  nav .bar.active{
    background-color: var(--font-color);
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

  .navigation{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .navigation_btn{
    font-size: 24px;
    width: 240px;
    height: 44px;
    margin: 5px 20px 25px 20px;
  }
</style>
