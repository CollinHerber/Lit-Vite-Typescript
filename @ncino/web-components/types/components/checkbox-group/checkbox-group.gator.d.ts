import { LitElement } from 'lit';
/**
 * @slot - The checkboxes within the group
 */
export type NGC_CHECKBOX_GROUP_OPTION = {
    title: string;
    value: string;
};
export declare class NgcCheckboxGroup extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
    *	@property {string} id - `id` for the checkbox group. If not provided, one will be uniquely generated.
    */
    id: string;
    /**
     * @property {string} label - Defines the visible label of the checkbox group.
     */
    label: string;
    /**
     * @property {string} helpText - Defines optional help text to be displayed below the checkbox group.
     */
    helpText: string;
    /**
    *	@property {string} value - The value of the checkbox group.
    */
    value: string;
    /**
    *	@property {boolean} disabled - Indicates whether the checkbox group is disabled.
    */
    disabled: boolean;
    /**
    *	@property {boolean} hasError - Indicates if the checkbox group should render in an error state.
    */
    hasError: boolean;
    /**
     * @property {string} errorMessage - Defines an optional error message to be displayed below the checkbox group when in an error state.
     */
    errorMessage: string;
    /**
     * @property {NGC_CHECKBOX_GROUP_OPTION[]} options - Options to render as radio buttons. Each option must have a title and value property and can optionally have a subtitle property.
     */
    options: NGC_CHECKBOX_GROUP_OPTION[];
    private _randomId;
    render(): import('lit').TemplateResult<1>;
    get elementId(): string;
    get describedBy(): string;
    get checkboxesFromOptions(): import('lit').TemplateResult<1>;
    handleCheckboxSelectionChange(event: Event): void;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-checkbox-group': NgcCheckboxGroup;
    }
}
