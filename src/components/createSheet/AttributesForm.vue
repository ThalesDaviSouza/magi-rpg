<template>
    <section>
        <div class="attributes_container">
            <AttributeCard
              :title="'Corpo'"
              :text="corpoCardText"
              :icon="'bi bi-person-fill'"
              v-model:value="corpoValue"
            />
            <AttributeCard
              :title="'Talento'"
              :text="talentoCardText"
              :icon="'bi bi-brightness-low-fill'"
              v-model:value="talentoValue"
            />
        </div>
        <h2 :class="{'text-red': remaining < 0}">
            Restante: {{ remaining }}
        </h2>
    </section>
</template>

<script setup lang="ts">
    import { computed, ref } from "vue";
    import AttributeCard from "./AttributeCard.vue";

    const maxPoints = 8;

    const corpoCardText =
    `Define o grau de treinamento do seu corpo
     e a quantidade de modificadores que uma 
     técnica de manipulação de Magoi pode ter.`;
    
    const corpoValue = ref(0);

    const talentoCardText =
    `Define sua habilidade com magia e a 
     quantidade de modificadores que uma 
     magia pode ter.`;
     
    const talentoValue = ref(0);

    const remaining = computed(() => {
        return maxPoints - corpoValue.value - talentoValue.value
    });

</script>

<style scoped>
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    }

    h2{
        margin-top: 120px;
        font-size: 42px;
    }

    .attributes_container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .text-red{color: var(--red-base);}
    
</style>