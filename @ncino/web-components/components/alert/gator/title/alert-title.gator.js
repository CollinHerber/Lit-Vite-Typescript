import{N as n}from"../../alert.js";import{r as f,k as m}from"../../../../assets/index-chunk.js";import{t as p}from"../../../../assets/index-chunk3.js";import{p as c}from"../../../../assets/index-chunk4.js";import"../../../../assets/index-chunk2.js";const v='.gator-alert-title{color:var(--color-text-primary-base, #1F1F1F);font-family:var(--ngc-font-family),"Open Sans",sans-serif;font-size:1.5rem;font-weight:700}';var g=Object.defineProperty,_=Object.getOwnPropertyDescriptor,y=(a,t,l,e)=>{for(var r=e>1?void 0:e?_(t,l):t,s=a.length-1,o;s>=0;s--)(o=a[s])&&(r=(e?o(t,l,r):o(r))||r);return e&&r&&g(t,l,r),r};let i=class extends n{render(){return m`
            <div class="gator-alert-title">
                <slot></slot>
            </div>
        `}};i.styles=[f(c),f(v)];i=y([p("ngc-alert-title")],i);
