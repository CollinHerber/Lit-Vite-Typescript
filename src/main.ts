import './style.css';
import '../@ncino/web-components' //This would be replaced with the npm package

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>Using Lit Components inside Vanilla Typescript</h3>
    <nsc-button variant="brand">A SLDS Button</nsc-button>
    <nmc-button>A Material Button</nmc-button>
  </div>
`;
