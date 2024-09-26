import { NjcCard } from '../card/card.ts';
export type NGC_HEADLINE_CARD_ORIENTATION = 'horizontal' | 'vertical';
export declare class NjcHeadlineCard extends NjcCard {
    /**
     * @property {string} orientation
     * @description The orientation of the headline card
     */
    orientation: NGC_HEADLINE_CARD_ORIENTATION;
    /**
     * @property {boolean} background
     * @description Whether or not to show the background circle
     */
    background: boolean;
    /**
     * @property {string} iconName
     * @description The icon name for the card
     */
    iconName: string;
}
