import{k as a}from"../../../../assets/index-chunk.js";import{t as m}from"../../../../assets/index-chunk3.js";import{N as u}from"../menu-item.js";import{p as c}from"../../../../assets/index-chunk4.js";import{s as p}from"../../../../assets/index-chunk5.js";import{m as d}from"../../../../assets/index-chunk11.js";import"../../../../assets/index-chunk2.js";const v='.gator-menu-item{padding:0 .25rem;font-family:var(--ngc-font-family, "Open Sans"),sans-serif;font-size:.9375rem;line-height:1.375rem;font-weight:400}.gator-menu-item a{padding:.725rem .5rem;display:block;color:unset;text-decoration:none;cursor:pointer;border-radius:.25rem}.gator-menu-item a:focus-visible{outline:2px solid var(--color-blue-50, #11395B)}.gator-menu-item:hover{background-color:var(--color-blue-5, #F3F5F7)}li{list-style-type:none}.gator-menu-item:active{background-color:var(--gator-menu-item-pressed-background-color, var(--color-blue-25))}';var f=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(t,r,s,o)=>{for(var e=o>1?void 0:o?h(r,s):r,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(o?i(r,s,e):i(e))||e);return o&&e&&f(r,s,e),e};let l=class extends u{createRenderRoot(){return this}render(){return a`
            <style>${v}</style>
            <style>${c}</style>
            <style>${p}</style>
            <style>${d}</style>
            <li class="gator-menu-item" role="none">
                <a href="javascript:void(0)" role="menuitem" @click="${this.handleItemClick}" @keyup="${this.handleItemKeyup}">
                    <div class="gator-truncate">
                        ${this.value}
                    </div>
                </a>
            </li>
        `}handleItemKeyup(t){t.key===" "&&this.sendEvent()}handleItemClick(){this.sendEvent()}sendEvent(){this.dispatchEvent(new CustomEvent("menuitemclick",{bubbles:!0,composed:!0,detail:{value:this.value}}))}};l=g([m("ngc-menu-item")],l);
