import{r as p,i as u,x as a}from"../../../assets/index-chunk.js";import{s as h}from"../../../assets/index-chunk3.js";import{t as b}from"../../../assets/index-chunk4.js";import{n as c}from"../../../assets/index-chunk2.js";import{r as m}from"../../../assets/index-chunk6.js";import{N as _}from"./combobox.js";import{g as x}from"../../utils/string-utils.js";import"../../input/slds/input-label/input-label.slds.js";import"../../input/slds/input-error/input-error.slds.js";var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l=(e,s,i,r)=>{for(var t=r>1?void 0:r?f(s,i):s,n=e.length-1,d;n>=0;n--)(d=e[n])&&(t=(r?d(s,i,t):d(t))||t);return r&&t&&v(s,i,t),t};let o=class extends _{constructor(){super(...arguments),this.autocomplete=!1,this.clearAssistiveText="Clear",this._generatedId=x(),this._searchValue="",this.comboboxAriaLabel="Dropdown Items"}render(){return a`
            <div class="slds-form-element${this.valid?"":" slds-has-error"}" @focusout=${this._topLevelFocusOut}>
                <nsc-input-label .required="${this.required}" for="combobox-id-${this._generatedId}">
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
                                class="slds-dropdown slds-dropdown_fluid"
                                aria-label="${this.comboboxAriaLabel}"
                                tabindex="-1"
                                aria-busy="false"
                                role="listbox"
                            >
                                <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                                    ${this._filteredOptions.map(e=>a`
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
                ${this.displayedErrorText?a`<nsc-input-error>${this.displayedErrorText}</nsc-input-error>`:null}
            </div>
        `}get optionLabel(){var e;return((e=this.options.find(s=>s.value===this.value))==null?void 0:e.label)??""}get dropdownTriggerMarkup(){return a`
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
        `}get _fauxInputClasses(){return`slds-input_faux slds-combobox__input ${this.value?"slds-combobox__input-value":""}`}get autocompleteMarkup(){return this.value?a`
                <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-id-${this._generatedId}" aria-controls="listbox-id-${this._generatedId}" aria-expanded="${this.open}"
                     aria-haspopup="listbox">
                    <span class="slds-truncate">${this.optionLabel}</span>
                </div>
                <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right clear-icon" title="${this.clearAssistiveText}" @click="${this.clearValue}">
                    <nsc-icon name="close" size="x-small" svg-classes="slds-icon-text-default"></nsc-icon>
                    <span class="slds-assistive-text">${this.clearAssistiveText}</span>
                </button>
            `:a`
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                <input
                    type="text"
                    class="slds-input slds-combobox__input"
                    id="combobox-id-${this._generatedId}"
                    aria-labelledby="combobox-label-${this._generatedId}"
                    aria-autocomplete="list"
                    aria-expanded="true"
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
        `}selectOption(e){var s;if(super.selectOption(e),this.autocomplete){const i=(s=this.shadowRoot)==null?void 0:s.getElementById(`combobox-id-${this._generatedId}`);i&&(i.value=this.value)}}handleKeyDown(e){switch(e.key){case"ArrowDown":this.handleArrowDown(),e.preventDefault();break;case"ArrowUp":this.handleArrowUp(),e.preventDefault();break;case"Enter":this.open=!this.open,e.preventDefault();break;case"Escape":this.open=!1,e.preventDefault();break}}handleOptionKeyDown(e,s){switch(e.key){case"Enter":this.selectOption(s),e.preventDefault();break;case"ArrowDown":case"ArrowUp":case"Escape":this.handleKeyDown(e);break}}_focusIn(){this.open=!0}_topLevelFocusOut(e){e.currentTarget&&e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||((this.required||this._searchValue)&&!this.value?(this.valid=!1,this.displayedErrorText=this.requiredErrorText):(this.valid=!0,this.displayedErrorText=""),this.open=!1)}clearValue(){this.value="",this._searchValue="",this.dispatchEvent(new CustomEvent("change",{detail:void 0,bubbles:!0})),setTimeout(()=>{var s;let e=(s=this.shadowRoot)==null?void 0:s.getElementById(`combobox-id-${this._generatedId}`);e==null||e.focus()})}_handleAutocompleteInput(e){var s;this._searchValue=((s=e==null?void 0:e.target)==null?void 0:s.value)??""}get _filteredOptions(){return this._searchValue?this.options.filter(e=>e.label.toLowerCase().includes(this._searchValue.toLowerCase())):this.options}};o.styles=[p(h),u`
            .clear-icon {
                position: absolute;
                right: 0.5rem;
                top: 0.45rem;
            }
        `];l([c({type:Boolean})],o.prototype,"autocomplete",2);l([c({type:String})],o.prototype,"clearAssistiveText",2);l([m()],o.prototype,"_searchValue",2);l([c({type:String})],o.prototype,"comboboxAriaLabel",2);o=l([b("nsc-combobox")],o);export{o as N};
