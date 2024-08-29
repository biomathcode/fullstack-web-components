import { Component, attachShadow } from '@in/common';

@Component({
  selector: 'in-dialog',
  style: `
      :host {
        display: none;
      }
    `,
})
export class DialogComponent extends HTMLElement {
  constructor() {
    super();
    attachShadow(this, {
      mode: 'open',
    });
  }
}
