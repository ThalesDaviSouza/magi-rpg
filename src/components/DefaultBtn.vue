<template>
    <button
        :style="{'--main-color': backgroundColor,
                 '--hover-color': backgroundHoverColor,
                 '--font-color': fontColor,
                 '--font-hover-color': fontHoverColor,
                 filter: isFiltered ? 'brightness(0.6)' : 'brightness(1)'
                }"
        @click="clicked"
    >
        {{ text }}
    </button>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { 
        BtnColors, 
        BtnFontColors,
        ButtonInterface, 
        DEFAULT_BUTTON_HOVER_BACKGROUND, 
        DEFAULT_BUTTON_BACKGROUND, 
        DEFAULT_BUTTON_FONT, 
        DEFAULT_BUTTON_HOVER_FONT 
    }     
    from '../types/Button';

const props = defineProps<ButtonInterface>();

const backgroundColor = ref(props.backgroundColor ? props.backgroundColor : DEFAULT_BUTTON_BACKGROUND);
const backgroundHoverColor = ref(props.backgroundHoverColor ? props.backgroundHoverColor : DEFAULT_BUTTON_HOVER_BACKGROUND );
const fontColor = ref(props.fontColor ? props.fontColor : DEFAULT_BUTTON_FONT );
const fontHoverColor = ref(props.hoverFontColor ? props.hoverFontColor : DEFAULT_BUTTON_HOVER_FONT );

const isFiltered = ref(false);

const clicked = (a:PointerEvent) => {
    isFiltered.value = true;
    
    setInterval(() => {
        isFiltered.value = false;
    }, 230);
}

</script>

<style scoped>
    button{
        border: 0;
        border-radius: 20px;
        width: 100%;
        height: 100%;
        font-size: 100%;
        cursor: pointer;

        transition: all 0.15s;
        background-color: var(--main-color);
        color: var(--font-color);
    }
    
    button:hover{
        background-color: var(--hover-color);
        color: var(--font-hover-color);
    }

</style>