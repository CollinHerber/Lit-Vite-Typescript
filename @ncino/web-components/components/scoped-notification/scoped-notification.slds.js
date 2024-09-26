import{r as d,k as u}from"../../assets/index-chunk.js";import{t as m}from"../../assets/index-chunk3.js";import{n as l}from"../../assets/index-chunk2.js";import{s as p}from"../../assets/index-chunk6.js";import{N as h}from"./scoped-notification.js";import"../icon/slds/icon.slds.js";import"../icon/icon.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(s,r,n,i)=>{for(var e=i>1?void 0:i?g(r,n):r,o=s.length-1,c;o>=0;o--)(c=s[o])&&(e=(i?c(r,n,e):c(e))||e);return i&&e&&f(r,n,e),e};let t=class extends h{constructor(){super(...arguments),this.theme="light",this.icon=""}render(){return u`
            <div class="${this.modeClass}" role="status">
                <div class="slds-media__figure">
                    <span class="slds-assistive-text">${this.theme}</span>
                    <span class="${this.containerClass}" title="${this.iconName}">
						<nsc-icon name="${this.iconName}" type="utility"></nsc-icon>
					</span>
                </div>
                <slot></slot>
            </div>
        `}get modeClass(){const s="slds-scoped-notification slds-media slds-media_center slds-text-heading_small";switch(this.theme){case"warning":return s+" slds-theme_warning";case"error":return s+" slds-theme_error";case"info":return s+" slds-theme_info";case"light":return s+" slds-scoped-notification_light";case"dark":return s+" slds-scoped-notification_dark";case"success":return s+" slds-theme_success";default:return s}}get containerClass(){const s="slds-icon_container";switch(this.theme){case"warning":return s+" slds-icon-utility-warning";case"error":return s+" slds-icon-utility-error";case"info":return s+" slds-icon-utility-info";case"success":return s+" slds-icon-utility-success"}return s}get iconName(){switch(this.theme){case"warning":return"warning";case"error":return"error";case"info":return"info";case"success":return"success";default:return"info"}}};t.styles=[d(p)];a([l({type:String})],t.prototype,"theme",2);a([l({type:String})],t.prototype,"icon",2);t=a([m("nsc-scoped-notification")],t);export{t as N};
