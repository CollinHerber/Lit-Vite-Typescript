import { NjcAlert } from '../../alert.ts';
/**
 * @slot - The content within the button
 */
export declare class NgcAlertSubtitle extends NjcAlert {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-alert-subtitle': NgcAlertSubtitle;
    }
}
