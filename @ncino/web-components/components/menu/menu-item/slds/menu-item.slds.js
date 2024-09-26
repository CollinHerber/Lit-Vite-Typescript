import{r as a,k as m}from"../../../../assets/index-chunk.js";import{s as c}from"../../../../assets/index-chunk6.js";import{t as f}from"../../../../assets/index-chunk3.js";import{n as u}from"../../../../assets/index-chunk2.js";import{N as v}from"../menu-item.js";var _=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=(n,e,o,r)=>{for(var t=r>1?void 0:r?d(e,o):e,l=n.length-1,i;l>=0;l--)(i=n[l])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&_(e,o,t),t};let s=class extends v{constructor(){super(...arguments),this.title=""}render(){return m`
            <li class="slds-dropdown__item" role="presentation">
                <a href="javascript:void(0)">
                    <span class="slds-truncate" title="${this.title}">
                        <slot></slot>
                    </span>
                </a>
            </li>
        `}};s.styles=[a(c)];p([u({type:String})],s.prototype,"title",2);s=p([f("nsc-menu-item")],s);
