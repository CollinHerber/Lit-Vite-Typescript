import { LitElement } from 'lit';
import { NgcSelectionBox } from '../selection-box/selection-box.gator';
export type NGC_SELECTION_BOX_GROUP_OPTION = {
    title: string;
    subtitle?: string;
    value: string;
};
/**
 * @slot - The selection boxes within the group
 */
export declare class NgcSelectionBoxGroup extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
    * @property {string} id - The id for the selection group. If one is not provided, a random id will be generated.
    */
    id: string;
    /**
     * @property {NGC_SELECTION_BOX_GROUP_OPTION[]} options - Options to render as radio buttons. Each option must have a title and value property and can optionally have a subtitle property.
     */
    options: NGC_SELECTION_BOX_GROUP_OPTION[];
    /**
     * @property {boolean} disabled - Defines if the selection group should be disabled. Disabled selection groups cannot be selected.
     */
    disabled: boolean;
    /**
     * @property {string} value - Defines the current value of the selection group.
     */
    value: string;
    /**
     * @property {string} label - Defines the visible label of the selection group.
     */
    label: string;
    /**
     * @property {string} helpText - Defines optional help text to be displayed below the selection group.
     */
    helpText: string;
    /**
     * @property {string} type - Defines if the selection box group should be multi-select or single-select.
     */
    type: string;
    /**
     * @property {boolean} hasError - Defines if the selection group should be rendered in an error state.
     */
    hasError: boolean;
    /**
     * @property {string} errorMessage - Defines an optional error message to be displayed below the selection group when in an error state.
     */
    errorMessage: string;
    private _randomId;
    render(): import('lit').TemplateResult<1>;
    get elementId(): string;
    get radioGroupMarkup(): import('lit').TemplateResult<1>;
    get checkboxGroupMarkup(): import('lit').TemplateResult<1>;
    get optionsMarkup(): import('lit').TemplateResult<1>;
    get selectionBoxType(): "checkbox" | "radio";
    get isSingleSelect(): boolean;
    get generatedRadiosFromOptionsProperty(): import('lit').TemplateResult<1>[];
    get optionElements(): Element[] | NodeListOf<NgcSelectionBox> | undefined;
    isItemSelected(optionValue: string): boolean;
    handleChange(event: Event): void;
    updated(): void;
    getItemTabindex(index: number): 0 | -1;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-selection-box-group': NgcSelectionBoxGroup;
    }
}
