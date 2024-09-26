import { NjcChip } from '../chip.ts';
/**
 * @slot - The content within the button
 */
export declare class NgcChip extends NjcChip {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
    get chipMarkup(): import('lit').TemplateResult<1>;
    get readonlyChipMarkup(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ngc-chip': NgcChip;
    }
}
