import { NjcAlert } from '../../alert.ts';
/**
 * @slot - The content within the button
 */
export declare class NgcAlert extends NjcAlert {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
    get variantClass(): "gator-alert_info" | "gator-alert_warning" | "gator-alert_error" | "gator-alert_success" | "gator-alert_inverse";
    get iconMarkup(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-alert': NgcAlert;
    }
}
