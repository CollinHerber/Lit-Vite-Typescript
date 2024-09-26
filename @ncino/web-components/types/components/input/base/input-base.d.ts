import { LitElement } from 'lit';
export declare class InputBase extends LitElement {
    id: string;
    required: boolean;
    disabled: boolean;
    label: string;
    placeholder: string;
    value: string | number | undefined | null;
    errorText: string;
}
