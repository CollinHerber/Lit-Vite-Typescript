import { LitElement } from 'lit';
export declare class NjcInputRichText extends LitElement {
    /**
     * @description The value of the rich text input
     * @property {string} value
     */
    value: string | null;
    /**
     * @description The label for the rich text input
     * @property {string} label
     */
    label: string | null;
    /**
     * @description The placeholder for the rich text input
     * @property {string} placeholder
     */
    placeholder: string | null;
    /**
     * @description the time in ms to debounce the user input before firing a change event, if set to 0 debounce is disabled.
     * @property {number} debounceMS
     */
    debounce: number;
}
