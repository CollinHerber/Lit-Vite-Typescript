import { NjcPill } from './pill.ts';
export declare class NjcSldsPill extends NjcPill {
    static styles: import('lit').CSSResult[];
    /**
     * @description When provided, the pill will be a link
     * @property {string} href
     */
    href: string;
    render(): import('lit').TemplateResult<1>;
    get pillClasses(): string;
    get linkHtml(): import('lit').TemplateResult<1>;
    get labelHtml(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-pill': NjcSldsPill;
    }
}
