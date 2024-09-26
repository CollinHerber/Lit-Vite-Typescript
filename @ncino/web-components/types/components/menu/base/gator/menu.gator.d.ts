import { NjcMenu } from '../menu.ts';
export declare class NgcMenu extends NjcMenu {
    static styles: import('lit').CSSResult[];
    private _setListeners;
    private _button;
    render(): import('lit').TemplateResult<1>;
    handleTriggerSlotChange(e: Event): void;
    handleArrowDown(e: KeyboardEvent): void;
    focusFirstMenuItem(): void;
    focusTriggerButton(): void;
    handleItemSlotChange(e: Event): void;
    handleArrowUp(e: KeyboardEvent): void;
    handleClose(): void;
    private _topLevelFocusOut;
}
