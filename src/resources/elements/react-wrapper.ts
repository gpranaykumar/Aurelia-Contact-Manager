// src/resources/elements/react-wrapper.ts
import { customElement, bindable, inlineView } from 'aurelia-framework';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@customElement('react-wrapper')
@inlineView('<template></template>')
export class ReactWrapper {
  @bindable public reactComponent: React.FunctionComponent;
  @bindable public message: string;

  constructor( private element: Element) {}

  public bind(): void {
    const props = { message: this.message, testFun: this.testFun };
    ReactDOM.render(React.createElement(this.reactComponent, props as React.Attributes), this.element);
  }

  testFun(msg: string):void {
    
    alert("Aurelia to React Function test as props: "+ msg);
    console.log("Aurelia to React Function test as props: ", msg);
  }

  public unbind(): void {
    ReactDOM.unmountComponentAtNode(this.element);
  }
}