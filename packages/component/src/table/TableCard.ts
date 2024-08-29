import { Component, attachShadow, html, css } from '@in/common';

@Component({
  selector: 'in-tablecard',
  style: css``,
  template: html`
    <in-card>
      <table is="in-table" slot="content"></table>
      <div class="table-footer" slot="footer"></div>
    </in-card>
  `,
})
export class TableCardComponent extends HTMLElement {
  constructor() {
    super();
    attachShadow(this);
  }
}
