import{r as c,h as d,k as h}from"../../assets/index-chunk.js";import{t as u}from"../../assets/index-chunk3.js";import{n as p}from"../../assets/index-chunk2.js";import{g,a as m}from"../../utils/string-utils.js";import{p as b}from"../../assets/index-chunk4.js";import{s as x}from"../../assets/index-chunk5.js";import"../checkbox/checkbox.gator.js";import"../input/gator/input-label/input-label.gator.js";import"../input/gator/help-text/help-text.gator.js";import"../../utils/lightdom-utils.js";import"../icon/gator/icon.gator.js";import"../icon/icon-registry.js";import"../icon/gator/templates/balloons.js";import"../icon/gator/templates/exit-circle.js";import"../icon/gator/templates/info.js";import"../icon/gator/templates/warning.js";import"../icon/gator/templates/check-circle.js";import"../icon/gator/templates/restricted.js";import"../icon/gator/templates/checkbox.js";import"../icon/gator/templates/checkbox-selected.js";import"../icon/gator/templates/radio.js";import"../icon/gator/templates/radio-selected.js";const v=".gator-checkbox-group,.gator-checkbox-group-container{display:flex;flex-direction:column;gap:var(--spacing-gap-8)}";var y=Object.defineProperty,$=Object.getOwnPropertyDescriptor,l=(e,t,i,s)=>{for(var o=s>1?void 0:s?$(t,i):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&y(t,i,o),o};let r=class extends d{constructor(){super(...arguments),this.id="",this.label="",this.helpText="",this.value="",this.disabled=!1,this.hasError=!1,this.errorMessage="",this.options=[],this._randomId=g()}render(){const e=this.elementId;return h`
			<div class="gator-checkbox-group-container">
				${this.label?h`<ngc-input-label id="${e}-label">${this.label}</ngc-input-label>`:null}
				<div id="${e}-group"
					role="group"
					class="gator-checkbox-group"
					aria-labelledby="${e}-label"
					aria-describedby=${this.describedBy}
					>
					${this.options.length>0?this.checkboxesFromOptions:h`<slot @change=${this.handleCheckboxSelectionChange}></slot>`}
				</div>
				${this.hasError&&this.errorMessage!==""?h`<ngc-help-text id="${e}-error" icon="true" error="true">${this.errorMessage}</ngc-help-text>`:null}
				${this.helpText?h`<ngc-help-text id="${e}-help">${this.helpText}</ngc-help-text>`:null}
			</div>
		`}get elementId(){return m(this.id,this._randomId)}get describedBy(){const e=[];return this.errorMessage&&e.push(`${this.elementId}-error`),this.helpText&&e.push(`${this.elementId}-help`),e.join(" ")}get checkboxesFromOptions(){const e=new Set(this.value.split(";"));return h`
			${this.options.map(t=>h`
				<ngc-checkbox
					value="${t.value}"
					?disabled=${this.disabled}
					?selected=${e.has(t.value)}
					?has-error=${this.hasError}
					@change=${this.handleCheckboxSelectionChange}
					title-text="${t.title}"
					>
				</ngc-checkbox>
			`)}
		`}handleCheckboxSelectionChange(e){var s;const t=e;e.stopImmediatePropagation();const i=new Set((s=this.value)==null?void 0:s.split(";"));t.detail.selected?i.add(t.detail.value):i.delete(t.detail.value),this.value=Array.from(i).join(";"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:this.value}))}updated(){var s,o;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("slot"),t=e==null?void 0:e.assignedElements(),i=new Set((o=this.value)==null?void 0:o.split(";"));t&&t.length>0&&t.forEach(n=>{const a=n;a.selected=i.has(a.value),a.disabled=this.disabled,a.hasError=this.hasError})}};r.styles=[c(b),c(x),c(v)];l([p({type:String})],r.prototype,"id",2);l([p({type:String})],r.prototype,"label",2);l([p({type:String,attribute:"help-text"})],r.prototype,"helpText",2);l([p({type:String})],r.prototype,"value",2);l([p({type:Boolean})],r.prototype,"disabled",2);l([p({type:Boolean,attribute:"has-error"})],r.prototype,"hasError",2);l([p({type:String,attribute:"error-message"})],r.prototype,"errorMessage",2);l([p({type:Array})],r.prototype,"options",2);r=l([u("ngc-checkbox-group")],r);export{r as N};
