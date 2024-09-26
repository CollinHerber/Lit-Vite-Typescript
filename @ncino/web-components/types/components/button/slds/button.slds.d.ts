import { NjcButton } from '../button.ts';
export declare class NjcButtonSlds extends NjcButton {
    static styles: import('lit').CSSResult[];
    private get _themeClass();
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-button': NjcButtonSlds;
    }
}
