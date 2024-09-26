import { LitElement } from 'lit';
export type NJC_BADGE_THEME = null | 'inverse' | 'lightest' | 'success' | 'warning' | 'error';
export declare class NjcBadge extends LitElement {
    /**
     * @description The name of the icon to render. This is the name of the icon in the Salesforce Lightning Design System
     * @property {string} name
     */
    theme: NJC_BADGE_THEME;
    /**
     * @description id attribute provided to the rendered batch span element
     * @property {string} badgeId
     */
    badgeId: string;
    getElementId(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-badge': NjcBadge;
    }
}
