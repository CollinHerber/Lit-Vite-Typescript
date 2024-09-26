import{r as p,k as f}from"../../../../assets/index-chunk.js";import{s as w}from"../../../../assets/index-chunk6.js";import{t as b}from"../../../../assets/index-chunk3.js";import{N as g}from"../menu.js";import"../../../../assets/index-chunk2.js";var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,v=(o,t,l,i)=>{for(var e=i>1?void 0:i?_(t,l):t,r=o.length-1,s;r>=0;r--)(s=o[r])&&(e=(i?s(t,l,e):s(e))||e);return i&&e&&y(t,l,e),e};let c=class extends g{constructor(){super(...arguments),this._setListeners=!1}render(){return f`
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" @focusout=${this._topLevelFocusOut}>
                <slot @slotchange="${this.handleTriggerSlotChange}" name="trigger"></slot>
                ${this.open?f`
                    <div class="slds-dropdown slds-dropdown_left">
                        <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
                            <slot @slotchange="${this.handleItemSlotChange}"></slot>
                        </ul>
                    </div>
                `:""}
            </div>
        `}handleTriggerSlotChange(o){o.target.assignedElements().forEach(i=>{var e,r,s,u,n;this._button=(e=i.shadowRoot)==null?void 0:e.querySelector("button"),(r=this._button)==null||r.setAttribute("aria-haspopup","true"),(s=this._button)==null||s.setAttribute("aria-expanded",this.open?"true":"false"),(u=this._button)==null||u.addEventListener("click",()=>{var a;this.open=!this.open,this.focusFirstMenuItem(),(a=this._button)==null||a.setAttribute("aria-expanded",this.open?"true":"false")}),(n=this._button)==null||n.addEventListener("keydown",a=>{this._setListeners=!0,a.key==="ArrowDown"&&this.handleArrowDown(a)})})}_topLevelFocusOut(o){o.relatedTarget||(this.open=!1)}focusFirstMenuItem(){setTimeout(()=>{var t,l;(l=(t=this.querySelectorAll(":scope > nsc-menu-item, :scope > nsc-submenu")[0].shadowRoot)==null?void 0:t.querySelector("a"))==null||l.focus()})}handleItemSlotChange(o){var i,e;const l=o.target.assignedElements();for(let[r,s]of l.entries()){const u=s.tagName.toLowerCase();if(u==="nsc-menu-item"||u==="nsc-submenu"){s.setAttribute("role","listitem");let n=(i=s.shadowRoot)==null?void 0:i.querySelector("a");if(n==null||n.setAttribute("role","menuitem"),r===0?n==null||n.setAttribute("tabindex","0"):n==null||n.setAttribute("tabindex","-1"),!this._setListeners){let a=(e=s.shadowRoot)==null?void 0:e.querySelectorAll("li");if(a)for(let m of a)m.addEventListener("keydown",d=>{var h;this._setListeners=!0,d.key==="ArrowDown"?this.handleArrowDown(d):d.key==="ArrowUp"?this.handleArrowUp(d):d.key==="Tab"?this.handleClose():d.key==="Escape"&&(this.handleClose(),(h=this._button)==null||h.focus())})}}}}handleClose(){this.open=!1;const o=this.querySelectorAll("nsc-submenu");if(o)for(let t of o)t.open=!1}handleArrowDown(o){var r,s,u,n;o.preventDefault();const t=this.querySelectorAll(":scope > nsc-menu-item, :scope > nsc-submenu"),l=this.querySelector(":focus");let i=Array.from(t).indexOf(l);i===-1&&((s=(r=t[0].shadowRoot)==null?void 0:r.querySelector("a"))==null||s.focus());let e=i+1;e>t.length-1&&(e=0),(n=(u=t[e].shadowRoot)==null?void 0:u.querySelector("a"))==null||n.focus()}handleArrowUp(o){var r,s;o.preventDefault();const t=this.querySelectorAll(":scope > nsc-menu-item, :scope > nsc-submenu"),l=this.querySelector(":focus");let e=Array.from(t).indexOf(l)-1;e<0&&(e=t.length-1),(s=(r=t[e].shadowRoot)==null?void 0:r.querySelector("a"))==null||s.focus()}};c.styles=[p(w)];c=v([b("nsc-menu")],c);