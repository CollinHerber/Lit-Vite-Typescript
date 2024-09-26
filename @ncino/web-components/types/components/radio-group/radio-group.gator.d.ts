import { LitElement } from 'lit';
import { NgcRadio } from '../radio/radio.gator';
/**
 * @slot - The radios within the group
 */
export type NGC_RADIO_GROUP_OPTION = {
    title: string;
    value: string;
};
export declare class NgcRadioGroup extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
    *	@property {string} id - `id` for the radio group. If not provided, one will be uniquely generated.
    */
    id: string;
    /**
     * @property {string} label - Defines the visible label of the radio group.
     */
    label: string;
    /**
     * @property {string} helpText - Defines optional help text to be displayed below the radio group.
     */
    helpText: string;
    /**
    *	@property {string} value - The value of the radio group.
    */
    value: string;
    /**
    *	@property {boolean} disabled - Indicates whether the radio group is disabled.
    */
    disabled: boolean;
    /**
    *	@property {boolean} hasError - Indicates if the radio group should render in an error state.
    */
    hasError: boolean;
    /**
     * @property {string} errorMessage - Defines an optional error message to be displayed below the radio group when in an error state.
     */
    errorMessage: string;
    /**
     * @property {NGC_RADIO_GROUP_OPTION[]} options - Options to render as radio buttons. Each option must have a title and value property.
     */
    options: NGC_RADIO_GROUP_OPTION[];
    private _randomId;
    render(): import('lit').TemplateResult<1>;
    get elementId(): string;
    get radiosFromOptions(): import('lit').TemplateResult<1>;
    get radioElements(): NgcRadio[];
    get describedBy(): string;
    handleRadioSelectionChange(event: Event): void;
    handleRadioKeydown(event: KeyboardEvent): void;
    updated(): void;
    getItemTabindex(index: number): 0 | -1;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-radio-group': NgcRadioGroup;
    }
}
