import { PropertyValues } from 'lit';
import { Ref } from 'lit/directives/ref.js';
import { Editor } from 'ckeditor5';
import { NjcInputRichText } from './input-rich-text.ts';
export declare class NscInputRichText extends NjcInputRichText {
    createRenderRoot(): this;
    _ckEditor: Editor | undefined;
    _editorRef: Ref<HTMLInputElement>;
    _externalDataChange: boolean;
    firstUpdated(): Promise<void>;
    _registerCKEditorEvents(editor: Editor): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nsc-input-rich-text': NscInputRichText;
    }
}
