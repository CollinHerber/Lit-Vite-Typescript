import { LitElement } from 'lit';
export declare class NgcCheckbox extends LitElement {
    createRenderRoot(): this;
    /**
    *	@property {string} id
    */
    id: string;
    /**
    *	@property {string} title - The title text for the checkbox button option.
    */
    titleText: string;
    /**
    *	@property {string} value - The text label for the checkbox button option.
    */
    value: string;
    /**
    *	@property {boolean} selected - Indicates whether the checkbox button is currently selected.
    */
    selected: boolean;
    /**
    *	@property {boolean} disabled - Indicates whether the checkbox button is disabled.
    */
    disabled: boolean;
    /**
    *	@property {boolean} hasError - Indicates if the checkbox button should render in an error state.
    */
    hasError: boolean;
    private _randomId;
    private _labelSlot;
    render(): import('lit').TemplateResult<1>;
    get elementId(): string;
    get labelContent(): string | Node;
    handleClick(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-checkbox': NgcCheckbox;
    }
}
