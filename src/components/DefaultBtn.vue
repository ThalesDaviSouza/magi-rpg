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
import { ref } from 'vue'
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

const emit = defineEmits<{
  (e: 'clicked'): void
}>();    
    
const props = defineProps<ButtonInterface>();

let backgroundColorValue = props.backgroundColor;
if(!props.backgroundColor && !props.isActive){
    backgroundColorValue = DEFAULT_BUTTON_BACKGROUND;
}
else if(!props.backgroundColor){
    backgroundColorValue = DEFAULT_BUTTON_HOVER_BACKGROUND;
}

let backgroundHoverColorValue = props.backgroundHoverColor;
if(!props.backgroundHoverColor && !props.isActive){
    backgroundHoverColorValue = DEFAULT_BUTTON_HOVER_BACKGROUND;
}
else if(!props.backgroundHoverColor){
    backgroundHoverColorValue = DEFAULT_BUTTON_BACKGROUND;
}

let fontColorValue = props.fontColor;
if(!props.fontColor && !props.isActive){
    fontColorValue = DEFAULT_BUTTON_FONT;
}
else if(!props.fontColor){
    fontColorValue = DEFAULT_BUTTON_HOVER_FONT;
}

let fontHoverColorValue = props.hoverFontColor;
if(!props.hoverFontColor && !props.isActive){
    fontHoverColorValue = DEFAULT_BUTTON_HOVER_FONT;
}
else if(!props.hoverFontColor){
    fontHoverColorValue = DEFAULT_BUTTON_FONT;
}

const backgroundColor = ref(backgroundColorValue);
const backgroundHoverColor = ref(backgroundHoverColorValue);

const fontColor = ref(fontColorValue);
const fontHoverColor = ref(fontHoverColorValue);

const isFiltered = ref(false);

const clicked = (a:PointerEvent) => {
    isFiltered.value = true;
    
    setInterval(() => {
        isFiltered.value = false;
    }, 230);

    emit("clicked");
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