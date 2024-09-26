import { TemplateResult } from 'lit';
/**
 * The global icon registry.
 */
export declare const icons: Map<string, TemplateResult>;
/**
 * Adds an icon definition the global registry and returns the definition.
 */
export declare const icon: (name: string, def: TemplateResult) => TemplateResult;
