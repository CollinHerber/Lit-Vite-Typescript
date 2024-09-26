import { NjcHeadlineCard } from '../headline-card.ts';
import { Ref } from 'lit/directives/ref.js';
export declare class NgcHeadlineCard extends NjcHeadlineCard {
    static styles: import('lit').CSSResult[];
    private _shouldBeVertical;
    containerRef: Ref<HTMLInputElement>;
    firstUpdated(): void;
    render(): import('lit').TemplateResult<1>;
    get cardContentClass(): "gator-headline-card-content_vertical" | "gator-headline-card-content";
    get justifyCenterClass(): "" | "gator-headline-card-justify-content-center";
    get backgroundMarkup(): import('lit').TemplateResult<1> | null;
    get actionsClass(): "gator-headline-card-actions_vertical" | "gator-headline-card-actions";
    get elevatedClass(): "" | "gator-card_elevated";
    get outlinedClass(): "" | "gator-card_outlined";
    get orientationClass(): "" | "gator-headline-card_vertical";
    get getBackgroundClass(): "gator-headline-card-background-circle_vertical" | "gator-headline-card-background-circle";
    get cardTitleMarkup(): import('lit').TemplateResult<1> | null;
    get cardSubtitleMarkup(): import('lit').TemplateResult<1>;
    get shouldBeVertical(): boolean;
}
