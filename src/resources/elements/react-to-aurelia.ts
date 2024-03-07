import { customElement, inlineView } from 'aurelia-framework';

@customElement('react-to-aurelia')
@inlineView('<template><div ref="container">Aurelia Component</div></template>')
export class AureliaComponent {
  private container: HTMLDivElement;

  constructor(private element: Element) {}

  public bind(): void {
    this.handleReactToAurelia = this.handleReactToAurelia.bind(this);
    window.addEventListener('react-to-aurelia', this.handleReactToAurelia);
  }

  public unbind(): void {
    window.removeEventListener('react-to-aurelia', this.handleReactToAurelia);
  }

  private handleReactToAurelia(event: CustomEvent): void {
    const data = event.detail;
    alert("Aurelia: "+data.message); 
  }
}
