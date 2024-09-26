import { LitElement } from 'lit';
export declare class NjcCard extends LitElement {
    /**
     * @description The title for the card
     * @property {string} title
     */
    title: string;
    /**
     * @description The subtitle for the card
     * @property {string} subtitle
     */
    subtitle: string;
    /**
     * @description If the card should contain a box shadow
     * @property {boolean} elevated
     */
    elevated: boolean;
    /**
     * @description If the card should contain a border
     * @property {boolean} outlined
     */
    outlined: boolean;
}
