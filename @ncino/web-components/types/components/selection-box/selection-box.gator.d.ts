import { LitElement, TemplateResult } from 'lit';
export declare class NgcSelectionBox extends LitElement {
    createRenderRoot(): this;
    constructor();
    /**
    *	@property {string} id - The title text for the selection-box button option.
    */
    id: string;
    /**
    *	@property {string} title - The title text for the selection-box button option.
    */
    titleText: string;
    /**
    *	@property {string} subtitle - The subtitle text for the selection-box button option.
    */
    subtitleText: string;
    /**
    *	@property {string} value - The value of the selection-box. This is the value emitted on change.
    */
    value: string;
    /**
    *	@property {boolean} selected - Indicates whether the selection-box is currently selected.
    */
    selected: boolean;
    /**
    *	@property {boolean} disabled - Indicates whether the selection-box is disabled.
    */
    disabled: boolean;
    /**
    *	@property {number} boxTabindex - The tabindex value for the selection-box.
    */
    boxTabindex: number;
    /**
    *	@property {boolean} hasError - Indicates if the selection-box should render in an error state.
    */
    hasError: boolean;
    /**
    *	@property {string} type - Indicates if the selection-box should render as a radio or checkbox.
    */
    type: string;
    private _randomId;
    private _labelFromTemplate;
    private _generatedLabel;
    private _prependSlot;
    render(): TemplateResult<1>;
    get elementId(): string;
    get containerClasses(): string;
    get iconName(): "" | "checkbox" | "checkbox-selected" | "radio" | "radio-selected";
    get labelContent(): TemplateResult;
    get generatedLabelContent(): TemplateResult;
    get prependSlot(): TemplateResult | null;
    get isRadio(): boolean;
    get isCheckbox(): boolean;
    get tabindex(): number;
    handleClick(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
    focusItem(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-selection-box': NgcSelectionBox;
    }
}
