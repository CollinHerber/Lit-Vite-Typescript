import { LitElement } from 'lit';
export declare class NscInputError extends LitElement {
    static styles: import('lit').CSSResult[];
    id: string;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-input-error': NscInputError;
    }
}
