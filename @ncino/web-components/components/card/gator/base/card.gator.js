import{N as u}from"../../card.js";import"../title/card-title.gator.js";import"../subtitle/card-subtitle.gator.js";import{r as c,k as a}from"../../../../assets/index-chunk.js";import{s as n}from"../../../../assets/index-chunk9.js";import{p}from"../../../../assets/index-chunk4.js";import{t as m}from"../../../../assets/index-chunk3.js";import"../../../../assets/index-chunk2.js";import"../../../../assets/index-chunk5.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,h=(d,r,s,e)=>{for(var t=e>1?void 0:e?v(r,s):r,i=d.length-1,l;i>=0;i--)(l=d[i])&&(t=(e?l(r,s,t):l(t))||t);return e&&t&&g(r,s,t),t};let o=class extends u{render(){return a`
            <div class="gator-card ${this.elevatedClass} ${this.outlinedClass}">
                ${this.cardTitleMarkup}
                ${this.subtitle?this.cardSubtitleMarkup:null}
                <slot></slot>
            </div>
        `}get elevatedClass(){return this.elevated?"gator-card_elevated":""}get outlinedClass(){return this.outlined?"gator-card_outlined":""}get cardTitleMarkup(){return this.title?a`<ngc-card-title>${this.title}</ngc-card-title>`:null}get cardSubtitleMarkup(){return a`<ngc-card-subtitle>${this.subtitle}</ngc-card-subtitle>`}};o.styles=[c(n),c(p)];o=h([m("ngc-card")],o);
