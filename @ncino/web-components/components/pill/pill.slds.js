import{r as c,i as m,x as n}from"../../assets/index-chunk.js";import{s as _}from"../../assets/index-chunk3.js";import{t as f}from"../../assets/index-chunk4.js";import{n as u}from"../../assets/index-chunk2.js";import{N as h}from"./pill.js";import"../icon/icon.slds.js";import"../icon/icon.js";var d=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(a,l,r,t)=>{for(var s=t>1?void 0:t?b(l,r):l,i=a.length-1,o;i>=0;i--)(o=a[i])&&(s=(t?o(l,r,s):o(s))||s);return t&&s&&d(l,r,s),s};let e=class extends h{constructor(){super(...arguments),this.href=""}render(){return n`
            <span class="${this.pillClasses}">
                ${this.href?this.linkHtml:this.labelHtml}
                <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="TODO" @click="${this.removeClicked}">
                    <nsc-icon name="close" size="x-small" svg-classes="slds-button__icon"></nsc-icon>
                    <span class="slds-assistive-text">Remove</span>
                </button>
            </span>
        `}get pillClasses(){return`slds-pill${this.href?" slds-pill_link":""}`}get linkHtml(){return n`
            <a href="${this.href}" class="slds-pill__action" title="TODO" target="_blank">
                <span class="slds-pill__label">
                    <slot></slot>
                </span>
            </a>
        `}get labelHtml(){return n`
            <span class="slds-pill__label" title="TODO">
                <slot></slot>
            </span>
        `}};e.styles=[c(_),m`
        :host {
            --sds-c-icon-color-foreground: currentColor;
        }
        `];p([u({type:String})],e.prototype,"href",2);e=p([f("nsc-pill")],e);
