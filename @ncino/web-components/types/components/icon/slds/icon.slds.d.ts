import { NjcIcon } from '../icon.ts';
export declare class NjcSldsIcon extends NjcIcon {
    static styles: import('lit').CSSResult[];
    get iconPath(): string;
    get iconSize(): string;
    get iconVariant(): string;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-icon': NjcSldsIcon;
    }
}
