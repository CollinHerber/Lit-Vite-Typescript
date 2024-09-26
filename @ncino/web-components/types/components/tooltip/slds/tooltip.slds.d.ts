import { NjcTooltip } from '../tooltip.ts';
export declare class NscTooltip extends NjcTooltip {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
    get xPositionOffset(): 12 | 0 | -12;
    get yPositionOffset(): 12 | 0 | -12;
    get nubbinPositionClass(): "" | "slds-nubbin_bottom" | "slds-nubbin_bottom-left" | "slds-nubbin_bottom-right" | "slds-nubbin_left" | "slds-nubbin_left-bottom" | "slds-nubbin_left-top" | "slds-nubbin_top" | "slds-nubbin_top-left" | "slds-nubbin_top-right";
    assignPosition(): void;
}
