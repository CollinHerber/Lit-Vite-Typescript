import{D as c,R as m,r as d,k as p}from"../../../assets/index-chunk.js";import{s as u}from"../../../assets/index-chunk6.js";import{t as h}from"../../../assets/index-chunk3.js";import{N as b}from"./combobox-item.js";import{e as _,i as f,t as v}from"../../../assets/index-chunk8.js";import"../../../assets/index-chunk2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends f{constructor(s){if(super(s),this.it=c,s.type!==v.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(s){if(s===c||s==null)return this._t=void 0,this.it=s;if(s===m)return s;if(typeof s!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(s===this.it)return this._t;this.it=s;const e=[s];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;const x=_(n),g=".slds-listbox__option_plain{padding:.5rem .75rem}.slds-listbox__option:focus,.slds-listbox__option:hover{background-color:var(--slds-g-color-neutral-base-95, #f3f3f3)}";var y=Object.defineProperty,$=Object.getOwnPropertyDescriptor,w=(o,s,e,i)=>{for(var t=i>1?void 0:i?$(s,e):s,l=o.length-1,r;l>=0;l--)(r=o[l])&&(t=(i?r(s,e,t):r(t))||t);return i&&t&&y(s,e,t),t};let a=class extends b{render(){return p`
            <li role="presentation" class="slds-listbox__item" @click=${this.selectOption} data-testid="nsc-combobox-option">
                <div class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small ${this.selectedValue==this.value?"slds-is-selected":""}"  role="option" tabindex="-1">
                    <span class="slds-media__figure slds-listbox__option-icon">
                        ${this.selectedValue==this.value?p`<span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                  <nsc-icon name="check" size="x-small" svg-classes="slds-icon-text-default"></nsc-icon>
                                </span>`:""}
                    </span>
                    <span class="slds-media__body">
                        <span class="slds-truncate" title="${this.label}">
                            ${x(this.boldedSearchHtml)}
                        </span>
                    </span>
                </div>
            </li>
        `}get boldedSearchHtml(){return this.searchValue?this.label.replace(new RegExp(`(${this.searchValue})`,"gi"),"<b>$1</b>"):this.label}};a.styles=[d(u),d(g)];a=w([h("nsc-combobox-item")],a);export{a as N};
