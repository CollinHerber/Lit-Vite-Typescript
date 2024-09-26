import { NjcMenuItem } from '../menu-item.ts';
export declare class NgcMenuItem extends NjcMenuItem {
    /**
     * Using light dom for accessibility purposes, enabling the screen reader
     */
    createRenderRoot(): this;
    render(): import('lit').TemplateResult<1>;
    handleItemKeyup(e: KeyboardEvent): void;
    handleItemClick(): void;
    sendEvent(): void;
}
