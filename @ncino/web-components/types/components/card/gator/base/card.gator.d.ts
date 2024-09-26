import { NjcCard } from '../../card.ts';
export declare class NgcCard extends NjcCard {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
    get elevatedClass(): "" | "gator-card_elevated";
    get outlinedClass(): "" | "gator-card_outlined";
    get cardTitleMarkup(): import('lit').TemplateResult<1> | null;
    get cardSubtitleMarkup(): import('lit').TemplateResult<1>;
}
