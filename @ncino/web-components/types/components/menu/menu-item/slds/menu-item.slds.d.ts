import { NjcMenuItem } from '../menu-item.ts';
export declare class NjcSldsMenuItem extends NjcMenuItem {
    static styles: import('lit').CSSResult[];
    /**
        @property title - The title of the rendered menu item span
        @type {string}
    */
    title: string;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-menu-item': NjcSldsMenuItem;
    }
}
