import { LitElement } from 'lit';
export type NJC_ICON_SIZE = 'xx-small' | 'x-small' | 'small' | 'large';
export type NJC_ICON_VARIANT = 'success' | 'warning' | 'error' | 'light' | 'bare';
export type NJC_ICON_TYPE = 'standard' | 'utility' | 'doctype' | 'action' | 'custom';
export declare class NjcIcon extends LitElement {
    /**
     * @description The name of the icon to render. This is the name of the icon in the Salesforce Lightning Design System
     * @property {string} name
     */
    name: string | null;
    /**
     * @description The type of icon to render. This is the type of icon in the Salesforce Lightning Design System
     * @property {NJC_ICON_TYPE} type
     */
    type: NJC_ICON_TYPE;
    /**
     * @description The size of the icon to render. This is the size of the icon in the Salesforce Lightning Design System
     * @property {NJC_ICON_SIZE} size
     */
    size: NJC_ICON_SIZE;
    /**
     * @description The title attribute to apply to the rendered icon
     * @property {string} iconTitle
     */
    iconTitle: string | null;
    /**
     * @description The variant of the icon to render. This is the variant of the icon in the Salesforce Lightning Design System
     * @property {NJC_ICON_VARIANT} variant
     */
    variant: NJC_ICON_VARIANT;
    /**
     * @description Additional classes applied to the svg element
     * @property {string} svgClasses
     */
    svgClasses: string;
    /**
     * @description Force the fill color of the rendered svg
     * @property {string} fill
     */
    fill: string;
}
