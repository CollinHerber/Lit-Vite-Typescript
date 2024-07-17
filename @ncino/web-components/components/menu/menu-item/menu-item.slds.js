import{r as i,x as n}from"../../../assets/index-chunk.js";import{s as m}from"../../../assets/index-chunk3.js";import{t as c}from"../../../assets/index-chunk4.js";import{N as f}from"./menu-item.js";import"../../../assets/index-chunk2.js";var v=Object.defineProperty,_=Object.getOwnPropertyDescriptor,u=(a,e,t,r)=>{for(var s=r>1?void 0:r?_(e,t):e,l=a.length-1,o;l>=0;l--)(o=a[l])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&v(e,t,s),s};let p=class extends f{render(){return n`
            <li class="slds-dropdown__item" role="presentation">
                <a href="javascript:void(0)">
                    <span class="slds-truncate" title="${this.title}">
                        <slot></slot>
                    </span>
                </a>
            </li>
        `}};p.styles=[i(m)];p=u([c("nsc-menu-item")],p);export{p as N};
