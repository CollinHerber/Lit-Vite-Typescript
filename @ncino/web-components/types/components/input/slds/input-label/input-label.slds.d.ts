import { LitElement } from 'lit';
export declare class NscInputLabel extends LitElement {
    static styles: import('lit').CSSResult[];
    required: boolean;
    for: string;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-input-label': NscInputLabel;
    }
}
