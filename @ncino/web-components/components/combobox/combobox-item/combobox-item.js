import{s as n}from"../../../assets/index-chunk.js";import{n as s}from"../../../assets/index-chunk2.js";var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,l=(a,t,p,r)=>{for(var e=r>1?void 0:r?h(t,p):t,u=a.length-1,c;u>=0;u--)(c=a[u])&&(e=(r?c(t,p,e):c(e))||e);return r&&e&&v(t,p,e),e};class o extends n{constructor(){super(...arguments),this.label="",this.value=null,this.searchValue="",this.selectedValue=null}selectOption(){this.dispatchEvent(new CustomEvent("change",{}))}}l([s()],o.prototype,"label",2);l([s()],o.prototype,"value",2);l([s({attribute:"search-value"})],o.prototype,"searchValue",2);l([s({attribute:"selected-value"})],o.prototype,"selectedValue",2);export{o as N};
