import { LitElement } from 'lit';
export type NJC_ALERT_VARIANTS = 'info' | 'warning' | 'error' | 'success' | 'inverse';
export declare class NjcAlert extends LitElement {
    /**
        @property variant - The variant of the button
        @type {NJC_ALERT_VARIANTS}
     **/
    variant: NJC_ALERT_VARIANTS;
}
