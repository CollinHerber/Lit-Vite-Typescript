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

        <ngc-card elevated="true">
          <ngc-card-header>
            <ngc-text-detail size="large" title="Card Title" subtitle="Card Subtitle" invert-title>
              <ngc-illustration slot="prepend" name="balloons"></ngc-illustration>
            </ngc-text-detail>
          </ngc-card-header>
          <ngc-card-content>
              Here is some content that you can put into a card. <br>
              This is a lot and can be anything you'd like
          </ngc-card-content>
          <ngc-card-footer>
              <div style="text-align: center">
                  Card Footer
              </div>
          </ngc-card-footer>
        </ngc-card> 
    </div>

  </div>
`;
