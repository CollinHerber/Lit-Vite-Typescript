import{r as l,h as g}from"../../../assets/index-chunk.js";import{t as p}from"../../../assets/index-chunk3.js";import{n as h}from"../../../assets/index-chunk2.js";import{a as v}from"../icon-registry.js";const d=".gator-icon{width:var(--ngc-icon-width);height:var(--ngc-icon-height);color:var(--ngc-icon-color);display:var(--ngc-icon-display)}",m=":host,:root{--ngc-icon-width: 1.5rem;--ngc-icon-height: 1.5rem;--ngc-icon-color: unset;--ngc-icon-display: flex}";var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=(e,t,r,i)=>{for(var s=i>1?void 0:i?u(t,r):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(i?c(t,r,s):c(s))||s);return i&&s&&f(t,r,s),s};let o=class extends g{constructor(){super(...arguments),this.name="",this.label=""}firstUpdated(){var e,t,r;this._svg=(e=this.shadowRoot)==null?void 0:e.querySelector("svg"),(t=this._svg)==null||t.classList.add("gator-icon"),(r=this._svg)==null||r.setAttribute("role","img")}updated(){var e,t;this.label&&((e=this._svg)==null||e.setAttribute("aria-label",this.label)),(t=this._svg)==null||t.setAttribute("aria-hidden",this.label===""?"true":"false")}render(){return v.get(this.name)}};o.styles=[l(d),l(m)];a([h()],o.prototype,"name",2);a([h()],o.prototype,"label",2);o=a([p("ngc-icon")],o);
