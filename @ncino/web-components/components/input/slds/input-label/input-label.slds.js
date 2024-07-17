import{r as n,s as b,x as i}from"../../../../assets/index-chunk.js";import{s as m}from"../../../../assets/index-chunk3.js";import{t as c}from"../../../../assets/index-chunk4.js";import{n as u}from"../../../../assets/index-chunk2.js";var _=Object.defineProperty,d=Object.getOwnPropertyDescriptor,a=(f,s,l,t)=>{for(var r=t>1?void 0:t?d(s,l):s,o=f.length-1,p;o>=0;o--)(p=f[o])&&(r=(t?p(s,l,r):p(r))||r);return t&&r&&_(s,l,r),r};let e=class extends b{constructor(){super(...arguments),this.required=!1,this.for=""}render(){return i`
            <label class="slds-form-element__label" for="${this.for}">
                ${this.required?i`<abbr class="slds-required" title="required">*</abbr>`:null}
                <slot></slot>
            </label>
        `}};e.styles=[n(m)];a([u()],e.prototype,"required",2);a([u()],e.prototype,"for",2);e=a([c("nsc-input-label")],e);export{e as N};
