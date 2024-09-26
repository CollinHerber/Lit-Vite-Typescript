import{r as p,k as o}from"../../../../assets/index-chunk.js";import"../input-label/input-label.slds.js";import"../input-error/input-error.slds.js";import{s as h}from"../../../../assets/index-chunk6.js";import{t as d}from"../../../../assets/index-chunk3.js";import{n as c}from"../../../../assets/index-chunk2.js";import{I as m}from"../../base/input-base.js";var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(t,e,l,s)=>{for(var r=s>1?void 0:s?f(e,l):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(r=(s?n(e,l,r):n(r))||r);return s&&r&&v(e,l,r),r};let i=class extends m{constructor(){super(...arguments),this.for=""}render(){return o`
            <div class="slds-form-element ${this.hasErrorClass}">
                ${this.label?this.labelMarkup:null}
                <div class="slds-form-element__control">
                    <input
                        type="text"
                        .id="${this.id}"
                        .placeholder="${this.placeholder}"
                        .required="${this.required}"
                        .disabled="${this.disabled}"
                        class="slds-input"
                        aria-invalid="${this.isAriaInvalid}"
                        .value="${this.value}"
                        @input="${this.handleChange}"
                    />
                </div>
                ${this.errorText?o`<nsc-input-error>${this.errorText}</nsc-input-error>`:null}
            </div>
        `}handleChange(t){const e=t.target;this.value=e.value}get labelMarkup(){return o`
            <nsc-input-label .for="${this.id}" .required="${this.required}">
                ${this.label}
            </nsc-input-label>`}get hasErrorClass(){return this.errorText?"slds-has-error":""}get isAriaInvalid(){return this.errorText?"true":"false"}};i.styles=[p(h)];u([c()],i.prototype,"for",2);i=u([d("nsc-input-text")],i);
