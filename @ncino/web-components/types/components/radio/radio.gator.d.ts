import { LitElement } from 'lit';
export declare class NgcRadio extends LitElement {
    createRenderRoot(): this;
    constructor();
    /**
    *	@property {string} id - The title text for the radio button option.
    */
    id: string;
    /**
    *	@property {string} title - The title text for the radio button option.
    */
    titleText: string;
    /**
    *	@property {string} value - The text label for the radio button option.
    */
    value: string;
    /**
    *	@property {boolean} selected - Indicates whether the radio button is currently selected.
    */
    selected: boolean;
    /**
    *	@property {boolean} disabled - Indicates whether the radio button is disabled.
    */
    disabled: boolean;
    /**
    *	@property {boolean} hasError - Indicates if the radio button should render in an error state.
    */
    hasError: boolean;
    /**
    *	@property {number} radioTabindex - Indicates if the radio button should render in an error state.
    */
    radioTabindex: number;
    private _titleSlot;
    private _randomId;
    render(): import('lit').TemplateResult<1>;
    get elementId(): string;
    get titleContent(): string | Node;
    get tabindex(): number;
    handleClick(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-radio': NgcRadio;
    }
}
