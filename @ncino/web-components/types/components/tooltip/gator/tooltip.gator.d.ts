import { NjcTooltip } from '../tooltip.ts';
export declare class NgcTooltip extends NjcTooltip {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
    get xPositionOffset(): number;
    get yPositionOffset(): number;
    get nubbinPositionClass(): "" | "gator-tooltip-nubbin_bottom" | "gator-tooltip-nubbin_left" | "gator-tooltip-nubbin_top" | "gator-tooltip-nubbin_right";
    assignPosition(): void;
}
