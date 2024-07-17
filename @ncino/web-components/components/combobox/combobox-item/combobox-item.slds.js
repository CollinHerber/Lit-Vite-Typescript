import{T as c,w as p,r as u,i as h,x as d}from"../../../assets/index-chunk.js";import{s as m}from"../../../assets/index-chunk3.js";import{t as _}from"../../../assets/index-chunk4.js";import{N as b}from"./combobox-item.js";import{e as f,i as v,t as x}from"../../../assets/index-chunk7.js";import"../../../assets/index-chunk2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends v{constructor(s){if(super(s),this.it=c,s.type!==x.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(s){if(s===c||s==null)return this._t=void 0,this.it=s;if(s===p)return s;if(typeof s!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(s===this.it)return this._t;this.it=s;const t=[s];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;const g=f(n);var $=Object.defineProperty,y=Object.getOwnPropertyDescriptor,w=(l,s,t,i)=>{for(var e=i>1?void 0:i?y(s,t):s,o=l.length-1,r;o>=0;o--)(r=l[o])&&(e=(i?r(s,t,e):r(e))||e);return i&&e&&$(s,t,e),e};let a=class extends b{render(){return d`
            <li role="presentation" class="slds-listbox__item" @click=${this.selectOption} data-testid="nsc-combobox-option">
                <div class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small ${this.selectedValue==this.value?"slds-is-selected":""}"  role="option" tabindex="-1">
                    <span class="slds-media__figure slds-listbox__option-icon">
                        ${this.selectedValue==this.value?d`<span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                  <nsc-icon name="check" size="x-small" svg-classes="slds-icon-text-default"></nsc-icon>
                                </span>`:""}
                    </span>
                    <span class="slds-media__body">
                        <span class="slds-truncate" title="${this.label}">
                            ${g(this.boldedSearchHtml)}
                        </span>
                    </span>
                </div>
            </li>
        `}get boldedSearchHtml(){return this.searchValue?this.label.replace(new RegExp(`(${this.searchValue})`,"gi"),"<b>$1</b>"):this.label}};a.styles=[u(m),h`
            .slds-listbox__option_plain {
                padding: 0.5rem 0.75rem;
            }
            .slds-listbox__option:focus,
            .slds-listbox__option:hover {
                background-color: var(--slds-g-color-neutral-base-95, #f3f3f3);
            }
        `];a=w([_("nsc-combobox-item")],a);export{a as N};
