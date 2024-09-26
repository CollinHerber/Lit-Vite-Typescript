import { NjcComboboxItem } from './combobox-item.ts';
export declare class NjcSldsComboboxItem extends NjcComboboxItem {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
    get boldedSearchHtml(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-combobox-item': NjcSldsComboboxItem;
    }
}
