import './style.css';
import '../@ncino/web-components' //This would be replaced with the npm package

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>Using Lit Components inside Vanilla Typescript</h3>
    <nsc-button variant="brand">A SLDS Button</nsc-button>
    <ngc-button>A Gator Button</ngc-button>

    <div class="token-area">
        <h3>Designing a NGC Button with SLDS using Tokens</h3>
        <ngc-button>A Gator Button With Tokens</ngc-button>
    </div>
  </div>
`;
