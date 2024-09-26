import { NjcCombobox } from './combobox.ts';
import { NJC_COMBOBOX_OPTION } from '../combobox-item';
export declare enum COMBOBOX_DROPDOWN_LENGTH {
    FIVE = "5",
    SEVEN = "7",
    TEN = "10",
    NOSCROLL = ""
}
export declare class NjcSldsCombobox extends NjcCombobox {
    static styles: import('lit').CSSResult[];
    /**
     * If true, the combobox will be an autocomplete input instead of a dropdown
     * @type {boolean}
     */
    autocomplete: boolean;
    /**
     * Assistive text for the clear value button
     * @type {string}
     */
    clearAssistiveText: string;
    /**
     * Aria label for the combobox dropdown
     * @type {string}
     */
    comboboxAriaLabel: string;
    /**
     * Determines the number of items that will be displayed in the dropdown before scrolling is introduced
     * @type {COMBOBOX_DROPDOWN_LENGTH}
     */
    dropdownLength: COMBOBOX_DROPDOWN_LENGTH;
    _searchValue: string;
    _generatedId: string;
    render(): import('lit').TemplateResult<1>;
    get dropdownLengthClass(): string;
    get optionLabel(): string;
    get dropdownTriggerMarkup(): import('lit').TemplateResult<1>;
    private get _fauxInputClasses();
    get autocompleteMarkup(): import('lit').TemplateResult<1>;
    selectOption(option: NJC_COMBOBOX_OPTION): void;
    handleKeyDown(e: KeyboardEvent): void;
    handleOptionKeyDown(e: KeyboardEvent, option: NJC_COMBOBOX_OPTION): void;
    private _focusIn;
    private _topLevelFocusOut;
    clearValue(): void;
    private _handleAutocompleteInput;
    private get _filteredOptions();
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-combobox': NjcSldsCombobox;
    }
}
