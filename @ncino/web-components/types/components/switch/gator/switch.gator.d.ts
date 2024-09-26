import { NjcSwitch } from '../switch.ts';
export declare class NgcSwitch extends NjcSwitch {
    static styles: import('lit').CSSResult[];
    updated(): void;
    render(): import('lit').TemplateResult<1>;
    handleInputKeydown(event: KeyboardEvent): void;
    handleContainerClick(event: Event): void;
    private _toggleSwitch;
    private _getLabelMarkup;
    private _getInputId;
    private _getContainerId;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-switch': NgcSwitch;
    }
}
