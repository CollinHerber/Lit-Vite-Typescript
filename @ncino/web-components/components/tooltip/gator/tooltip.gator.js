import{N as p}from"../tooltip.js";import{r as i,k as c}from"../../../assets/index-chunk.js";import{K as f}from"../../../assets/index-chunk10.js";import{t as m}from"../../../assets/index-chunk3.js";import{a as u,t as g,c as b}from"../../../assets/index-chunk12.js";import{p as h}from"../../../assets/index-chunk4.js";import{s as d}from"../../../assets/index-chunk5.js";import"../../../assets/index-chunk2.js";import"../../../consts/key-constants.js";import"../../../utils/string-utils.js";import"../../../assets/index-chunk8.js";const _='.gator-tooltip{background-color:var(--ngc-tooltip-background-color);border-radius:.1875rem;padding:var(--spacing-2, .5rem) var(--spacing-4, 1rem);color:var(--ngc-tooltip-color, #fff)}.gator-tooltip-body{display:flex;align-items:center}.gator-tooltip-nubbin_bottom:before{position:absolute;width:1rem;height:1rem;transform:rotate(45deg);content:"";background-color:inherit;left:50%;bottom:-.5rem;margin-left:-.5rem;border-radius:100% 0 3px}.gator-tooltip-nubbin_top:before{position:absolute;width:1rem;height:1rem;transform:rotate(45deg);content:"";background-color:inherit;left:50%;top:-.5rem;margin-left:-.5rem;border-radius:3px 0 100%}.gator-tooltip-nubbin_left:before{position:absolute;width:1rem;height:1rem;transform:rotate(45deg);content:"";background-color:inherit;left:-.5rem;top:50%;margin-top:-.5rem;border-radius:0 100% 0 3px}.gator-tooltip-nubbin_right:before{position:absolute;width:1rem;height:1rem;transform:rotate(45deg);content:"";background-color:inherit;right:-.5rem;top:50%;margin-top:-.5rem;border-radius:0 3px 0 100%}',v=":host{--ngc-tooltip-background-color: var(--color-neutral-70, #1F1F1F);--ngc-tooltip-color: var(--color-grey-10, #FFF) }";var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,O=(t,e,r,s)=>{for(var o=s>1?void 0:s?x(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(o=(s?l(e,r,o):l(o))||o);return s&&o&&y(e,r,o),o};let a=class extends p{render(){return c`
            <div ${f(this._tooltipRef)} class="gator-tooltip ${this.nubbinPositionClass}" role="tooltip" id="${this.tooltipId}">
                <div class="gator-tooltip-body">
                    <slot></slot>
                </div>
            </div>
        `}get xPositionOffset(){return this.placement.includes("left")?-12+this.xOffset:this.placement.includes("right")?12+this.xOffset:0}get yPositionOffset(){return this.placement.includes("top")?-12+this.yOffset:this.placement.includes("bottom")?12+this.yOffset:0}get nubbinPositionClass(){switch(this.placement){case"top":return"gator-tooltip-nubbin_bottom";case"right":return"gator-tooltip-nubbin_left";case"bottom":return"gator-tooltip-nubbin_top";case"left":return"gator-tooltip-nubbin_right"}return""}assignPosition(){const t=document.querySelector(`#${this.referenceId}`);!this._tooltipRef||!this._tooltipRef.value||!t||(this._cleanup=u(t,this._tooltipRef.value,async()=>{if(!this._tooltipRef||!this._tooltipRef.value||!t)return;const{x:e,y:r}=await b(t,this._tooltipRef.value,{placement:this.placement});Object.assign(this._tooltipRef.value.style,{left:`${e+this.xPositionOffset}px`,top:`${r+this.yPositionOffset}px`})}))}};a.styles=[i(_),i(g),i(h),i(d),i(v)];a=O([m("ngc-tooltip")],a);
