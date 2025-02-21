import './style.css';
import '@ncino/web-components';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>Using Lit Components inside Vanilla Typescript</h3>
    <nsc-button variant="brand">A SLDS Button</nsc-button>
    <ngc-button>A Gator Button</ngc-button>

    <div class="token-area">
        <h3>Designing a NGC Button with SLDS using Tokens</h3>
        <ngc-button>A Gator Button With Tokens</ngc-button>

        <ngc-display-card elevated="true" data-testid="testid" title="TextContent" subtitle="Subheader" action-button-text="Button">
        <div slot="top-right" style="display: flex; align-items: center; gap: 1rem">
            <ngc-button data-testid="CTA" variant="secondary">CTA</ngc-button>
            <ngc-menu placement="bottom-end">
                <ngc-icon-button slot="trigger" data-testid="overflow" icon-name="overflow-menu" data-aria-label="overflow menu">
                </ngc-icon-button>
                <ngc-menu-item value="Menu Item One"></ngc-menu-item>
                <ngc-menu-item value="Menu Item Two"></ngc-menu-item>
                <ngc-menu-item value="Menu Item Three"></ngc-menu-item>
            </ngc-menu>
        </div>
        <slot-placeholder></slot-placeholder>
    </ngc-display-card>
    </div>

  </div>
`;
