import { NjcButton } from '../button.ts';
/**
 * @slot - The content within the button
 */
export declare class NgcButton extends NjcButton {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-button': NgcButton;
    }
}
