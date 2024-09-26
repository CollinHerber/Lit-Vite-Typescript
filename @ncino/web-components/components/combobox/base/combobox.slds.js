import{r as u,i as h,k as l}from"../../../assets/index-chunk.js";import{s as b}from"../../../assets/index-chunk6.js";import{t as m}from"../../../assets/index-chunk3.js";import{n}from"../../../assets/index-chunk2.js";import{r as _}from"../../../assets/index-chunk7.js";import{N as x}from"./combobox.js";import{g}from"../../../utils/string-utils.js";import"../../input/slds/input-label/input-label.slds.js";import"../../input/slds/input-error/input-error.slds.js";var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(e,s,t,i)=>{for(var a=i>1?void 0:i?f(s,t):s,d=e.length-1,c;d>=0;d--)(c=e[d])&&(a=(i?c(s,t,a):c(a))||a);return i&&a&&v(s,t,a),a},p=(e=>(e.FIVE="5",e.SEVEN="7",e.TEN="10",e.NOSCROLL="",e))(p||{});let o=class extends x{constructor(){super(...arguments),this.autocomplete=!1,this.clearAssistiveText="Clear",this.comboboxAriaLabel="Dropdown Items",this.dropdownLength="10",this._searchValue="",this._generatedId=g()}render(){return l`
            <div class="slds-form-element${this.valid?"":" slds-has-error"}" @focusout=${this._topLevelFocusOut}>
                <nsc-input-label .required="${this.required}" for="combobox-id-${this._generatedId}" id="combobox-label-${this._generatedId}">
                    ${this.label}
                </nsc-input-label>
                <div class="slds-form-element__control">
                    <div class="slds-combobox_container">
                        <div
                            class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click ${this.open?"slds-is-open":""}"
                        >
                            ${this.autocomplete?this.autocompleteMarkup:this.dropdownTriggerMarkup}
                            <div
                                id="listbox-id-${this._generatedId}"
                                class="slds-dropdown slds-dropdown_fluid ${this.dropdownLengthClass}"
                                aria-label="${this.comboboxAriaLabel}"
                                tabindex="-1"
                                aria-busy="false"
                                role="listbox"
                            >
                                <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                                    ${this._filteredOptions.map(e=>l`
                                            <nsc-combobox-item
                                                .searchValue="${this._searchValue}"
                                                label="${e.label}"
                                                value="${e.value}"
                                                @keydown=${s=>this.handleOptionKeyDown(s,e)}
                                                @change=${()=>this.selectOption(e)}
                                                .selectedValue="${this.value}"
                                            ></nsc-combobox-item>
                                        `)}
                                    <slot></slot>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                ${this.displayedErrorText?l`<nsc-input-error>${this.displayedErrorText}</nsc-input-error>`:null}
            </div>
        `}get dropdownLengthClass(){return this.dropdownLength!=""?`slds-dropdown_length-${this.dropdownLength}`:""}get optionLabel(){var e;return((e=this.options.find(s=>s.value===this.value))==null?void 0:e.label)??""}get dropdownTriggerMarkup(){return l`
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                <div
                    role="combobox"
                    @keydown=${this.handleKeyDown}
                    tabindex="0"
                    class="${this._fauxInputClasses}"
                    aria-labelledby="combobox-label-${this._generatedId}"
                    id="combobox-id-${this._generatedId}-selected-value"
                    aria-controls="listbox-id-${this._generatedId}"
                    aria-expanded="${this.open}"
                    aria-haspopup="listbox"
                    @focusin=${this._focusIn}
                >
                    <span class="slds-truncate"> ${this.optionLabel||this.placeholder} </span>
                </div>
                <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <nsc-icon name="down" size="x-small" svg-classes="slds-icon-text-default"></nsc-icon>
                </span>
            </div>
        `}get _fauxInputClasses(){return`slds-input_faux slds-combobox__input ${this.value?"slds-combobox__input-value":""}`}get autocompleteMarkup(){return this.value?l`
                <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-id-${this._generatedId}" aria-controls="listbox-id-${this._generatedId}" aria-expanded="${this.open}"
                     aria-haspopup="listbox">
                    <span class="slds-truncate">${this.optionLabel}</span>
                </div>
                <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right clear-icon" title="${this.clearAssistiveText}" @click="${this.clearValue}">
                    <nsc-icon name="close" size="x-small" svg-classes="slds-icon-text-default"></nsc-icon>
                    <span class="slds-assistive-text">${this.clearAssistiveText}</span>
                </button>
            `:l`
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                <input
                    type="text"
                    class="slds-input slds-combobox__input"
                    id="combobox-id-${this._generatedId}"
                    aria-labelledby="combobox-label-${this._generatedId}"
                    aria-autocomplete="list"
                    aria-expanded="${this.open}"
                    @keydown=${this.handleKeyDown}
                    aria-haspopup="listbox"
                    autocomplete="off"
                    tabindex="0"
                    role="combobox"
                    placeholder="${this.placeholder}"
                    value=${this.value}
                    @focusin=${this._focusIn}
                    @input=${this._handleAutocompleteInput}
                />
                <span class="slds-icon_container slds-input__icon slds-input__icon_right">
                    <nsc-icon name="search" size="x-small" svg-classes="slds-icon-text-default"></nsc-icon>
                </span>
            </div>
        `}selectOption(e){var s;if(super.selectOption(e),setTimeout(()=>{var i;let t=(i=this.shadowRoot)==null?void 0:i.querySelector('div[role="combobox"]');t==null||t.focus()}),this.autocomplete){const t=(s=this.shadowRoot)==null?void 0:s.getElementById(`combobox-id-${this._generatedId}`);t&&(t.value=this.value)}}handleKeyDown(e){switch(e.key){case"ArrowDown":this.handleArrowDown(),e.preventDefault();break;case"ArrowUp":this.handleArrowUp(),e.preventDefault();break;case"Enter":this.open=!this.open,e.preventDefault();break;case"Escape":this.open&&e.stopPropagation(),this.open=!1,e.preventDefault();break}}handleOptionKeyDown(e,s){switch(e.key){case"Enter":this.selectOption(s);break;case"ArrowDown":case"ArrowUp":case"Escape":this.handleKeyDown(e);break}}_focusIn(){this.open=!0}_topLevelFocusOut(e){e.currentTarget&&e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||((this.required||this._searchValue)&&!this.value?(this.valid=!1,this.displayedErrorText=this.requiredErrorText):(this.valid=!0,this.displayedErrorText=""),this.open=!1)}clearValue(){this.value="",this._searchValue="",this.dispatchEvent(new CustomEvent("change",{detail:void 0,bubbles:!0})),setTimeout(()=>{var s;let e=(s=this.shadowRoot)==null?void 0:s.getElementById(`combobox-id-${this._generatedId}`);e==null||e.focus()})}_handleAutocompleteInput(e){var s;this._searchValue=((s=e==null?void 0:e.target)==null?void 0:s.value)??""}get _filteredOptions(){return this._searchValue?this.options.filter(e=>e.label.toLowerCase().includes(this._searchValue.toLowerCase())):this.options}};o.styles=[u(b),h`
            .clear-icon {
                position: absolute;
                right: 0.5rem;
                top: 0.45rem;
            }
        `];r([n({type:Boolean})],o.prototype,"autocomplete",2);r([n({type:String,attribute:"clear-assistive-text"})],o.prototype,"clearAssistiveText",2);r([n({type:String,attribute:"combobox-aria-label"})],o.prototype,"comboboxAriaLabel",2);r([n({type:p,attribute:"dropdown-length"})],o.prototype,"dropdownLength",2);r([_()],o.prototype,"_searchValue",2);o=r([m("nsc-combobox")],o);export{p as C,o as N};
