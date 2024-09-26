import { LitElement } from 'lit';
export declare class NgcInputLabel extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * @property {string} for - The id of the input element the label is for.
     */
    for: string;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-input-label': NgcInputLabel;
    }
}
