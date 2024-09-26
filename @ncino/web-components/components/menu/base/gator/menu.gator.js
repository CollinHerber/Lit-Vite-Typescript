import{r as c,k as f}from"../../../../assets/index-chunk.js";import{m}from"../../../../assets/index-chunk11.js";import{t as p}from"../../../../assets/index-chunk3.js";import{N as g}from"../menu.js";import"../../../../assets/index-chunk2.js";const b=".gator-dropdown{max-width:var(--gator-menu-dropdown-max-width, 16rem);padding:.5rem 0;border-radius:.5rem;box-shadow:0 .5rem 1rem #00000026;position:absolute;margin-top:.125rem}ul{padding:0;margin:0;list-style-type:none}";var w=Object.defineProperty,v=Object.getOwnPropertyDescriptor,y=(t,s,r,l)=>{for(var e=l>1?void 0:l?v(s,r):s,o=t.length-1,n;o>=0;o--)(n=t[o])&&(e=(l?n(s,r,e):n(e))||e);return l&&e&&w(s,r,e),e};let d=class extends g{constructor(){super(...arguments),this._setListeners=!1}render(){return f`
            <div class="gator-dropdown-trigger" @focusout=${this._topLevelFocusOut}>
                <slot @slotchange="${this.handleTriggerSlotChange}" name="trigger"></slot>
                ${this.open?f`
                    <div class="gator-dropdown">
                        <ul class="gator_dropdown__list" role="menu" aria-label="${this.menuAriaLabel}">
                            <slot @slotchange="${this.handleItemSlotChange}"></slot>
                        </ul>
                    </div>
                `:""}
            </div>
        `}handleTriggerSlotChange(t){t.target.assignedElements().forEach(l=>{var e,o,n,a,u;this._button=(e=l.shadowRoot)==null?void 0:e.querySelector("button"),(o=this._button)==null||o.setAttribute("aria-haspopup","true"),(n=this._button)==null||n.setAttribute("aria-expanded",this.open?"true":"false"),(a=this._button)==null||a.addEventListener("click",()=>{var i;this.open=!this.open,this.focusFirstMenuItem(),(i=this._button)==null||i.setAttribute("aria-expanded",this.open?"true":"false")}),(u=this._button)==null||u.addEventListener("keydown",i=>{i.key==="ArrowDown"&&(this.open=!0,this.focusFirstMenuItem())})})}handleArrowDown(t){var o;t.preventDefault();const s=this.querySelectorAll("a"),r=this.querySelector(":focus");let e=Array.from(s).indexOf(r)+1;e>s.length-1&&(e=0),(o=s[e])==null||o.focus()}focusFirstMenuItem(){setTimeout(()=>{var s,r;(r=(s=this.querySelectorAll("li")[0])==null?void 0:s.querySelector("a"))==null||r.focus()})}focusTriggerButton(){var t;(t=this._button)==null||t.focus()}handleItemSlotChange(t){const r=t.target.assignedElements();for(let[l,e]of r.entries()){const o=e.tagName.toLowerCase();if(o==="ngc-menu-item"||o==="ngc-submenu"){e.addEventListener("menuitemclick",()=>{this.handleClose()});let n=e==null?void 0:e.querySelector("a");if(l===0?n==null||n.setAttribute("tabindex","0"):n==null||n.setAttribute("tabindex","-1"),!this._setListeners){let a=e==null?void 0:e.querySelectorAll("a");if(a)for(let u of a)u.addEventListener("keydown",i=>{var h;this._setListeners=!0,i.key==="ArrowDown"||i.key==="ArrowRight"?this.handleArrowDown(i):i.key==="ArrowUp"||i.key==="ArrowLeft"?this.handleArrowUp(i):i.key==="Tab"?this.handleClose():i.key==="Escape"&&(this.handleClose(),(h=this._button)==null||h.focus())})}}}}handleArrowUp(t){var o;t.preventDefault();const s=this.querySelectorAll("a"),r=this.querySelector(":focus");let e=Array.from(s).indexOf(r)-1;e<0&&(e=s.length-1),(o=s[e])==null||o.focus()}handleClose(){var t;this.open=!1,(t=this._button)==null||t.setAttribute("aria-expanded","false"),this.focusTriggerButton()}_topLevelFocusOut(t){t.relatedTarget||(this.open=!1)}};d.styles=[c(b),c(m)];d=y([p("ngc-menu")],d);
