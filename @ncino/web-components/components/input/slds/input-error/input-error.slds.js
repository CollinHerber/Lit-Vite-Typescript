import{r as m,i as c,h as f,k as a}from"../../../../assets/index-chunk.js";import{s as v}from"../../../../assets/index-chunk6.js";import{t as d}from"../../../../assets/index-chunk3.js";import{n as u}from"../../../../assets/index-chunk2.js";var _=Object.defineProperty,h=Object.getOwnPropertyDescriptor,n=(i,e,o,s)=>{for(var r=s>1?void 0:s?h(e,o):e,l=i.length-1,p;l>=0;l--)(p=i[l])&&(r=(s?p(e,o,r):p(r))||r);return s&&r&&_(e,o,r),r};let t=class extends f{constructor(){super(...arguments),this.id="error"}render(){return a`
            <div class="slds-form-element__help error-text" id="${this.id}">
                <slot></slot>
            </div>
        `}};t.styles=[m(v),c`
            .error-text {
                color: var(--slds-g-color-error-base-40, #ea001e);
            }
        `];n([u()],t.prototype,"id",2);t=n([d("nsc-input-error")],t);
