<template>
    <label :for="inputId">
        <div class="attribute_card">
            <div class="card_icon">
                <i :class="props.icon"></i>
            </div>
            <h1 class="card_title">{{ props.title }}</h1>
            <div class="card_body">
                <span>
                    {{ props.text }}
                </span>
                <input class="card_input" type="number" 
                :id="inputId" 
                v-model="actualValue"
                @input="valueChanged"
                />
            </div>
        </div>
    </label>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { AttributeCardInterface } from '../../types/AttributeCard'
    
    const props = defineProps<AttributeCardInterface>();

    const actualValue = ref(props.value);

    const emit = defineEmits<{
        (e: 'update:value', value: number): number
    }>();    

    const valueChanged = (a:PointerEvent):void => {
        emit('update:value', actualValue.value);
    };

    const inputId = computed(() => 'card-input' + props.title );

</script>

<style scoped>
    label{
        width: 35%;
    }
    .attribute_card{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .card_body{
        display: flex;
        flex-direction: column;
    }
    .card_icon{
        font-size: 150px;
    }
    .card_title{
        margin: 5px;
        font-size: 36px;
    }
    .card_body span{
        text-align: center;
        padding: 5px 30px 5px 30px;
        font-size: 24px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .card_input{
        background-color: transparent;
        color: var(--font-color);
        border: 0;
        outline: none;

        font-size: 36px;
        text-align: center;
        margin-top: 20px;

        transition: all 0.2s;
    }

    .card_input:hover{
        filter: brightness(0.8);
    }

</style>