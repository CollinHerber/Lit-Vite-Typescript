import { NjcMenu } from '../menu.ts';
export declare class NjcSldsMenu extends NjcMenu {
    static styles: import('lit').CSSResult[];
    private _setListeners;
    private _button;
    render(): import('lit').TemplateResult<1>;
    handleTriggerSlotChange(e: Event): void;
    private _topLevelFocusOut;
    focusFirstMenuItem(): void;
    handleItemSlotChange(e: Event): void;
    handleClose(): void;
    handleArrowDown(e: KeyboardEvent): void;
    handleArrowUp(e: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-menu': NjcSldsMenu;
    }
}
