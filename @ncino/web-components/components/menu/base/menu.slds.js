import{r as a,x as i}from"../../../assets/index-chunk.js";import{s as p}from"../../../assets/index-chunk3.js";import{t as c}from"../../../assets/index-chunk4.js";import{N as u}from"./menu.js";import"../../../assets/index-chunk2.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h=(e,o,t,r)=>{for(var s=r>1?void 0:r?g(o,t):o,l=e.length-1,n;l>=0;l--)(n=e[l])&&(s=(r?n(o,t,s):n(s))||s);return r&&s&&f(o,t,s),s};let d=class extends u{render(){return i`
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" @focusout=${this._topLevelFocusOut}>
                <slot @slotchange="${this.handleTriggerSlotChange}" name="trigger"></slot>
                ${this.open?i`
                    <div class="slds-dropdown slds-dropdown_left">
                        <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
                            <slot @slotchange="${this.handleItemSlotChange}"></slot>
                        </ul>
                    </div>
                `:""}
            </div>
        `}_topLevelFocusOut(e){e.relatedTarget||(this.open=!1)}};d.styles=[a(p)];d=h([c("nsc-menu")],d);export{d as N};
