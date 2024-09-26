import{r as d,k as i}from"../../../assets/index-chunk.js";import{s as u}from"../../../assets/index-chunk6.js";import{t as p}from"../../../assets/index-chunk3.js";import{N as m}from"./menu-submenu.js";import"../../icon/slds/icon.slds.js";import"../../../assets/index-chunk2.js";import"../../icon/icon.js";var c=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f=(e,t,o,l)=>{for(var s=l>1?void 0:l?h(t,o):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(s=(l?n(t,o,s):n(s))||s);return l&&s&&c(t,o,s),s};let a=class extends m{render(){return i`
            <li class="slds-dropdown__item slds-has-submenu" role="presentation" @focusout=${this._topLevelFocusOut}>
                <a role="menuitem" href="javascript:void(0)" aria-haspopup="true" aria-expanded="${this.open}" tabindex="-1" @click="${this.handleSubmenuItemClicked}" @keydown="${this.handleAnchorKeydown}">
                    <span class="slds-truncate" title="${this.label}">
                        ${this.label}
                    </span>
                    <nsc-icon
                        type="utility"
                        name="right"
                        size="x-small"
                        variant="default"
                        class="slds-icon-text-default slds-m-left_small slds-shrink-none"
                    ></nsc-icon>
                </a>
                ${this.open?i`
                    <div class="slds-dropdown slds-dropdown_submenu slds-dropdown_submenu-right">
                        <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
                            <slot @slotchange="${this.handleItemSlotChange}"></slot>
                        </ul>
                    </div>
                `:""}
            </li>
        `}_topLevelFocusOut(e){e.relatedTarget||(this.open=!1)}};a.styles=[d(u)];a=f([p("nsc-submenu")],a);export{a as N};
