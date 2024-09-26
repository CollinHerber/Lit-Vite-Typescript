import{r as d,k as o}from"../../assets/index-chunk.js";import{s as i}from"../../assets/index-chunk6.js";import{t as m}from"../../assets/index-chunk3.js";import{N as g}from"./badge.js";import"../../assets/index-chunk2.js";import"../../utils/string-utils.js";var p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(s,r,a,t)=>{for(var e=t>1?void 0:t?u(r,a):r,l=s.length-1,n;l>=0;l--)(n=s[l])&&(e=(t?n(r,a,e):n(e))||e);return t&&e&&p(r,a,e),e};let c=class extends g{get badgeClass(){const s="slds-badge";switch(this.theme){case"inverse":return s+" slds-badge_inverse";case"lightest":return s+" slds-badge_lightest";case"success":return s+" slds-theme_success";case"warning":return s+" slds-theme_warning";case"error":return s+" slds-theme_error";default:return s}}render(){return o`
            <span id="${this.getElementId()}" class="${this.badgeClass}">
				<slot></slot>
			</span>
        `}};c.styles=[d(i)];c=h([m("nsc-badge")],c);export{c as N};
