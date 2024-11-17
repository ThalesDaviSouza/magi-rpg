export interface ButtonInterface{
    text?: string,
    backgroundColor?: BtnColors,
    backgroundHoverColor?: BtnColors,
    fontColor?: string,
    hoverFontColor?: string
}

export enum BtnColors {
    primary = '#42424F',
    secundary = '#F0F0F0'
}

export enum BtnFontColors {
    primary = '#F0F0F0',
    secundary = '#202026'
}

export const DEFAULT_BUTTON_BACKGROUND:BtnColors = BtnColors.primary; 
export const DEFAULT_BUTTON_HOVER_BACKGROUND:BtnColors = BtnColors.secundary; 

export const DEFAULT_BUTTON_FONT:BtnFontColors = BtnFontColors.primary; 
export const DEFAULT_BUTTON_HOVER_FONT:BtnFontColors = BtnFontColors.secundary; 
