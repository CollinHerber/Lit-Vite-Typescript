import { LitElement } from 'lit';
export declare class NjcSwitch extends LitElement {
    private _randomId;
    /**
        @description id - id for the rendered switch element
        @property {string}
     */
    id: string;
    getElementId(): string;
    /**
        @property disabled - Disables the switch
        @type {boolean}
    **/
    disabled: boolean;
    /**
        @property value - Value of the switch
        @type {boolean}
    **/
    value: boolean;
    /**
        @property label - Text to render as the switch's visible label
        @type {string}
     **/
    label: string;
}
