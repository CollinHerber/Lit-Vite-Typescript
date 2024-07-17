import{r as a,x as l}from"../../assets/index-chunk.js";import{s as p}from"../../assets/index-chunk3.js";import{t as h}from"../../assets/index-chunk4.js";import{N as v}from"./icon.js";import"../../assets/index-chunk2.js";var m=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(c,t,i,e)=>{for(var s=e>1?void 0:e?f(t,i):t,r=c.length-1,n;r>=0;r--)(n=c[r])&&(s=(e?n(t,i,s):n(s))||s);return e&&s&&m(t,i,s),s};let o=class extends v{get iconPath(){return`/_slds/icons/${this.type}-sprite/svg/symbols.svg#${this.name}`}get iconSize(){return`slds-icon_${this.size}`}get iconVariant(){return`slds-icon-text-${this.variant}`}render(){return l`
            <span class="slds-icon_container ${this.iconVariant}" title="${this.iconTitle}">
                <svg class="slds-icon ${this.iconSize} ${this.svgClasses}" aria-hidden="true">
                    <use href="${this.iconPath}"></use>
                </svg>
            </span>
        `}};o.styles=[a(p)];o=u([h("nsc-icon")],o);export{o as N};
