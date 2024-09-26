import { NjcAlert } from '../../alert.ts';
/**
 * @slot - The content within the button
 */
export declare class NgcAlertTitle extends NjcAlert {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-alert-title': NgcAlertTitle;
    }
}
