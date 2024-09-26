import{r as d,h as g,k as l}from"../../assets/index-chunk.js";import{t as u}from"../../assets/index-chunk3.js";import{n as o}from"../../assets/index-chunk2.js";import{p as c}from"../../assets/index-chunk4.js";import{g as m,a as b}from"../../utils/string-utils.js";import"../selection-box/selection-box.gator.js";import"../radio-group/radio-group.gator.js";import"../checkbox-group/checkbox-group.gator.js";import"../../assets/index-chunk5.js";import"../../utils/lightdom-utils.js";import"../icon/gator/icon.gator.js";import"../icon/icon-registry.js";import"../icon/gator/templates/balloons.js";import"../icon/gator/templates/exit-circle.js";import"../icon/gator/templates/info.js";import"../icon/gator/templates/warning.js";import"../icon/gator/templates/check-circle.js";import"../icon/gator/templates/restricted.js";import"../icon/gator/templates/checkbox.js";import"../icon/gator/templates/checkbox-selected.js";import"../icon/gator/templates/radio.js";import"../icon/gator/templates/radio-selected.js";import"../../consts/key-constants.js";import"../radio/radio.gator.js";import"../input/gator/help-text/help-text.gator.js";import"../input/gator/input-label/input-label.gator.js";import"../checkbox/checkbox.gator.js";const y=".gator-radio-group-options{padding-inline-start:0}";var x=Object.defineProperty,$=Object.getOwnPropertyDescriptor,s=(e,t,a,i)=>{for(var p=i>1?void 0:i?$(t,a):t,h=e.length-1,n;h>=0;h--)(n=e[h])&&(p=(i?n(t,a,p):n(p))||p);return i&&p&&x(t,a,p),p};let r=class extends g{constructor(){super(...arguments),this.id="",this.options=[],this.disabled=!1,this.value="",this.label="",this.helpText="",this.type="single-select",this.hasError=!1,this.errorMessage="",this._randomId=m()}render(){return l`${this.isSingleSelect?this.radioGroupMarkup:this.checkboxGroupMarkup}`}get elementId(){return b(this.id,this._randomId)}get radioGroupMarkup(){return l`
			<ngc-radio-group
				id=${this.id}
				value=${this.value}
				.disabled=${this.disabled}
				.label=${this.label}
				help-text=${this.helpText}
				?has-error=${this.hasError}
				error-message=${this.errorMessage}
				@change=${this.handleChange}>
				${this.optionsMarkup}
			</ngc-radio-group>
		`}get checkboxGroupMarkup(){return l`
			<ngc-checkbox-group
				id=${this.id}
				value=${this.value}
				.disabled=${this.disabled}
				.label=${this.label}
				help-text=${this.helpText}
				?has-error=${this.hasError}
				error-message=${this.errorMessage}
				@change=${this.handleChange}>
				${this.optionsMarkup}
			</ngc-checkbox-group>
		`}get optionsMarkup(){return l`${this.options.length>0?this.generatedRadiosFromOptionsProperty:l`<slot></slot>`}`}get selectionBoxType(){return this.isSingleSelect?"radio":"checkbox"}get isSingleSelect(){return this.type==="single-select"}get generatedRadiosFromOptionsProperty(){return this.options.map((e,t)=>l`
			<ngc-selection-box
				title-text=${e.title}
				subtitle-text=${e.subtitle}
				value=${e.value}
				?selected=${this.isItemSelected(e.value)}
				?disabled=${this.disabled}
				box-tabindex=${this.getItemTabindex(t)}
				?has-error=${this.hasError}
				type=${this.selectionBoxType}>
			</ngc-selection-box>`)}get optionElements(){var e,t,a;return this.options.length>0?(e=this.shadowRoot)==null?void 0:e.querySelectorAll("ngc-selection-box"):(a=(t=this.shadowRoot)==null?void 0:t.querySelector("slot"))==null?void 0:a.assignedElements()}isItemSelected(e){var t;return this.isSingleSelect?this.value===e:(t=this.value)==null?void 0:t.split(";").includes(e)}handleChange(e){const t=e;t.stopImmediatePropagation(),this.value=t.detail,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:this.value}))}updated(){var e;(e=this.optionElements)==null||e.forEach((t,a)=>{const i=t;i.boxTabindex=this.getItemTabindex(a),i.type=this.selectionBoxType,i.disabled=this.disabled,i.selected=this.isItemSelected(i.getAttribute("value")??""),i.hasError=this.hasError})}getItemTabindex(e){return this.isSingleSelect?e===0&&!this.value?0:-1:0}};r.styles=[d(y),d(c)];s([o({type:String})],r.prototype,"id",2);s([o({type:Array})],r.prototype,"options",2);s([o({type:Boolean})],r.prototype,"disabled",2);s([o({type:String})],r.prototype,"value",2);s([o({type:String})],r.prototype,"label",2);s([o({type:String,attribute:"help-text"})],r.prototype,"helpText",2);s([o({type:String})],r.prototype,"type",2);s([o({type:Boolean,attribute:"has-error"})],r.prototype,"hasError",2);s([o({type:String,attribute:"error-message"})],r.prototype,"errorMessage",2);r=s([u("ngc-selection-box-group")],r);export{r as N};
