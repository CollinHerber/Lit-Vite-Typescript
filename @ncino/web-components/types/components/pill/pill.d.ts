import { LitElement } from 'lit';
export declare class NjcPill extends LitElement {
    /**
     * @description Used to track when value has remove clicked. Is sent back in the remote custom event detail
     * @property {string} value
     */
    value: string;
    removeClicked(): void;
}
