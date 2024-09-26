import{r as m,h as g,k as p}from"../../assets/index-chunk.js";import{t as u}from"../../assets/index-chunk3.js";import{n}from"../../assets/index-chunk2.js";import{g as y,a as b}from"../../utils/string-utils.js";import{K as h}from"../../consts/key-constants.js";import{p as f}from"../../assets/index-chunk4.js";import{s as v}from"../../assets/index-chunk5.js";import"../radio/radio.gator.js";import"../icon/gator/icon.gator.js";import"../icon/gator/templates/balloons.js";import"../icon/gator/templates/exit-circle.js";import"../icon/gator/templates/info.js";import"../icon/gator/templates/warning.js";import"../icon/gator/templates/check-circle.js";import"../icon/gator/templates/restricted.js";import"../icon/gator/templates/checkbox.js";import"../icon/gator/templates/checkbox-selected.js";import"../icon/gator/templates/radio.js";import"../icon/gator/templates/radio-selected.js";import"../input/gator/help-text/help-text.gator.js";import"../input/gator/input-label/input-label.gator.js";import"../../utils/lightdom-utils.js";import"../icon/icon-registry.js";const x=".gator-radio-group,.gator-radio-group-container{display:flex;flex-direction:column;gap:var(--spacing-gap-8)}";var $=Object.defineProperty,I=Object.getOwnPropertyDescriptor,l=(e,t,r,s)=>{for(var a=s>1?void 0:s?I(t,r):t,d=e.length-1,i;d>=0;d--)(i=e[d])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&$(t,r,a),a};let o=class extends g{constructor(){super(...arguments),this.id="",this.label="",this.helpText="",this.value="",this.disabled=!1,this.hasError=!1,this.errorMessage="",this.options=[],this._randomId=y()}render(){return p`
			<div class="gator-radio-group-container">
				${this.label?p`<ngc-input-label id="${this.elementId}-label">${this.label}</ngc-input-label>`:null}
				<div id="${this.elementId}-group"
					role="radiogroup"
					class="gator-radio-group"
					aria-labelledby="${this.elementId}-label"
					aria-describedby=${this.describedBy}
					@keydown=${this.handleRadioKeydown}
					@change=${this.handleRadioSelectionChange}
					>
					${this.options.length>0?this.radiosFromOptions:p`<slot></slot>`}
				</div>
				${this.hasError&&this.errorMessage!==""?p`<ngc-help-text id="${this.elementId}-error" icon="true" error="true">${this.errorMessage}</ngc-help-text>`:null}
				${this.helpText?p`<ngc-help-text id="${this.elementId}-help">${this.helpText}</ngc-help-text>`:null}
			</div>
		`}get elementId(){return b(this.id,this._randomId)}get radiosFromOptions(){return p`
			${this.options.map(e=>p`
				<ngc-radio
					title-text=${e.title}
					value=${e.value}
					?disabled=${this.disabled}
					?selected=${this.value===e.value}
					?has-error=${this.hasError}
					>
				</ngc-radio>
			`)}
		`}get radioElements(){var t,r,s;return this.options.length>0?(t=this.shadowRoot)==null?void 0:t.querySelectorAll("ngc-radio"):(s=(r=this.shadowRoot)==null?void 0:r.querySelector("slot"))==null?void 0:s.assignedElements()}get describedBy(){const e=[];return this.errorMessage&&e.push(`${this.elementId}-error`),this.helpText&&e.push(`${this.elementId}-help`),e.join(" ")}handleRadioSelectionChange(e){const t=e;t.stopImmediatePropagation(),this.value=t.detail.value??t.detail,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:this.value}))}handleRadioKeydown(e){const t=this.radioElements;if(t){const r=Array.from(t).findIndex(i=>i.selected),s=e.key===h.RIGHT||e.key===h.DOWN,a=e.key===h.LEFT||e.key===h.UP,d=e.key===h.SPACE;if(s||a||d){e.preventDefault();let i=r===-1?0:r;s?i=(i+1)%t.length:a?i=(i-1+t.length)%t.length:d&&r===-1&&(i=0);const c=t[i];c&&c.click()}}}updated(){var e;(e=this.radioElements)==null||e.forEach((t,r)=>{t.selected=this.value===t.value,t.disabled=this.disabled,t.hasError=this.hasError,t.radioTabindex=this.getItemTabindex(r)})}getItemTabindex(e){return e===0&&!this.value?0:-1}};o.styles=[m(f),m(v),m(x)];l([n({type:String})],o.prototype,"id",2);l([n({type:String})],o.prototype,"label",2);l([n({type:String,attribute:"help-text"})],o.prototype,"helpText",2);l([n({type:String})],o.prototype,"value",2);l([n({type:Boolean})],o.prototype,"disabled",2);l([n({type:Boolean,attribute:"has-error"})],o.prototype,"hasError",2);l([n({type:String,attribute:"error-message"})],o.prototype,"errorMessage",2);l([n({type:Array})],o.prototype,"options",2);o=l([u("ngc-radio-group")],o);export{o as N};
