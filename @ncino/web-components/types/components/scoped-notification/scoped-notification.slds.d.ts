import { NjcScopedNotification } from './scoped-notification';
export type NJC_SCOPED_NOTIFICATION_THEMES = 'success' | 'warning' | 'error' | 'light' | 'dark' | 'info';
export declare class NjcSldsScopedNotification extends NjcScopedNotification {
    static styles: import('lit').CSSResult[];
    theme: NJC_SCOPED_NOTIFICATION_THEMES;
    icon: string;
    render(): import('lit').TemplateResult<1>;
    get modeClass(): string;
    get containerClass(): string;
    get iconName(): "info" | "warning" | "error" | "success";
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-scoped-notification': NjcSldsScopedNotification;
    }
}
