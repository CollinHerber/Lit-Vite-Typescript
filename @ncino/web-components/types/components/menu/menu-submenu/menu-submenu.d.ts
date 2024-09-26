import { LitElement } from 'lit';
export declare class NjcSubmenu extends LitElement {
    label: string;
    /**
     * The open state of the menu
     * @type {boolean}
     */
    open: boolean;
    private _setListeners;
    private _firstListElement;
    handleItemSlotChange(e: Event): void;
    handleSubmenuItemClicked(): void;
    handleAnchorKeydown(e: KeyboardEvent): void;
    focusFirstSubmenuItem(): void;
    handleArrowDown(e: KeyboardEvent): void;
    handleArrowUp(e: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-submenu': NjcSubmenu;
    }
}
