import { LitElement } from 'lit';
export type NJC_COMBOBOX_OPTION<T = string> = {
    label: string;
    value: T;
};
export declare class NjcComboboxItem extends LitElement {
    label: string;
    value: string | null;
    searchValue: string;
    selectedValue: string | null;
    selectOption(): void;
}
