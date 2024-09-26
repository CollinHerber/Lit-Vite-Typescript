import { Placement } from '@floating-ui/dom';
import { LitElement } from 'lit';
import { Ref } from 'lit/directives/ref.js';
export declare class NjcTooltip extends LitElement {
    referenceId: string;
    placement: Placement;
    xOffset: number;
    yOffset: number;
    _tooltipRef: Ref<HTMLElement>;
    _cleanup: (() => void) | undefined;
    private _forceOpen;
    tooltipId: string;
    firstUpdated(): void;
    toggleTooltip(): void;
    disconnectedCallback(): void;
    showTooltip(): void;
    hideTooltip(): void;
    assignPosition(): void;
}
