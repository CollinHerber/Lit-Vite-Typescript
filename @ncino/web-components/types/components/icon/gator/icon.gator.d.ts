import { LitElement } from 'lit';
/**
 * An element that renderings a single icon. Icons are either provided as a
 * Lit TemplateResult, or looked up by name from an icon registry.
 */
export declare class NgcIcon extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * @description The name of the icon to render. This is the name of the icon in the icon registry
     * @property {string} icon
     */
    name: string;
    /**
     * A description of the icon to use for accessibility. If omitted, the icon
     * will be ignored by assistive devices.
     */
    label: string;
    _svg: SVGElement | null | undefined;
    firstUpdated(): void;
    updated(): void;
    render(): import('lit').TemplateResult | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-icon': NgcIcon;
    }
}
