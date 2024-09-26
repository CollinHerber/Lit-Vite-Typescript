import{N as n}from"../../alert.js";import{r as m,k as p}from"../../../../assets/index-chunk.js";import{t as f}from"../../../../assets/index-chunk3.js";import{p as v}from"../../../../assets/index-chunk4.js";import"../../../../assets/index-chunk2.js";const c='.gator-alert-subtitle{color:var(--color-text-primary-base, #1F1F1F);font-family:var(--ngc-font-family),"Open Sans",sans-serif;font-size:var(--text-size-body-1, 1.0625rem);margin-top:var(--spacing-2, .5rem)}';var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,u=(i,t,s,e)=>{for(var r=e>1?void 0:e?g(t,s):t,l=i.length-1,o;l>=0;l--)(o=i[l])&&(r=(e?o(t,s,r):o(r))||r);return e&&r&&b(t,s,r),r};let a=class extends n{render(){return p`
            <div class="gator-alert-subtitle">
                <slot></slot>
            </div>
        `}};a.styles=[m(v),m(c)];a=u([f("ngc-alert-subtitle")],a);
