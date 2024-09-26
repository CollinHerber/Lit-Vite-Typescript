import { LitElement } from 'lit';
export declare class NgcHelpText extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * @property {string} id - The id for the help text inline message.
     */
    id: string;
    /**
     * @property {boolean} icon - Defines if the help text inline message should render the preceeding icon.
     */
    icon: boolean;
    /**
     * @property {boolean} error - Defines if the help text inline message should be rendered as an error.
     */
    error: boolean;
    render(): import('lit').TemplateResult<1>;
    get iconMarkup(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-help-text': NgcHelpText;
    }
}
