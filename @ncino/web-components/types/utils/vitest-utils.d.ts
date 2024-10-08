export declare function addTestableElement(markup: string): Promise<void>;
export declare function getElement(markup: string): HTMLElement | null;
export declare function getElementInsideElement(element: HTMLElement, markup: string): HTMLElement | null;
export declare function getElementsInsideElement(element: HTMLElement, markup: string): NodeListOf<Element>;
export declare function getElements(markup: string): NodeListOf<Element>;
export declare function getShadowRootHTMLElements(element: HTMLElement | null, markup: string): NodeListOf<Element> | undefined;
export declare function getShadowRootHTMLElement(element: HTMLElement | null, markup: string): HTMLElement | null | undefined;
export declare function getShadowRootElement(element: Element | null | undefined, markup: string): Element | null | undefined;
export declare function getSlotContent(element: HTMLElement | null): Node | undefined;
export declare function flushPromises(): Promise<unknown>;
