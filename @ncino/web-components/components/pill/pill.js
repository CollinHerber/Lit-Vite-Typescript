import{s as p}from"../../assets/index-chunk.js";import{n as u}from"../../assets/index-chunk2.js";var a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=(s,r,o,t)=>{for(var e=t>1?void 0:t?i(r,o):r,v=s.length-1,l;v>=0;v--)(l=s[v])&&(e=(t?l(r,o,e):l(e))||e);return t&&e&&a(r,o,e),e};class c extends p{constructor(){super(...arguments),this.value=""}removeClicked(){this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{value:this.value}}))}}n([u({type:String})],c.prototype,"value",2);export{c as N};