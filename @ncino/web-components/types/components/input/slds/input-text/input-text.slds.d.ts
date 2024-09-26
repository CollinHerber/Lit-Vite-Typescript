import { InputBase } from '../../base/input-base.ts';
export declare class NscInputText extends InputBase {
    static styles: import('lit').CSSResult[];
    for: string;
    render(): import('lit').TemplateResult<1>;
    handleChange(e: Event): void;
    get labelMarkup(): import('lit').TemplateResult<1>;
    get hasErrorClass(): "" | "slds-has-error";
    get isAriaInvalid(): "true" | "false";
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-input-text': NscInputText;
    }
}
