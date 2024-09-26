import { LitElement } from 'lit';
import { NJC_COMBOBOX_OPTION } from '../combobox-item/combobox-item.ts';
export declare class NjcCombobox extends LitElement {
    options: NJC_COMBOBOX_OPTION[];
    value: string;
    label: string;
    placeholder: string;
    open: boolean;
    required: boolean;
    valid: boolean;
    requiredErrorText: string;
    displayedErrorText: string;
    selectOption(option: NJC_COMBOBOX_OPTION): void;
    handleArrowDown(): void;
    handleArrowUp(): void;
}
