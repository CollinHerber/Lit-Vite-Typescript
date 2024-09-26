import { LitElement } from 'lit';
export type NJC_BUTTON_VARIANTS = null | 'neutral' | 'outline-brand' | 'brand' | 'destructive' | 'text-destructive' | 'success';
export declare class NjcButton extends LitElement {
    /**
        @property variant - The variant of the button
        @type {NJC_BUTTON_VARIANTS}
     **/
    variant: NJC_BUTTON_VARIANTS;
    /**
        @property disabled - Disables the button
        @type {boolean}
     **/
    disabled: boolean;
}
