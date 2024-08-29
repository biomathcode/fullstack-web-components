import { html } from 'lit-html';
import { TableCardComponent } from './TableCard';
import { TableComponent, ColumnData } from './Table';
import { CardComponent } from './../card/Card';
export default {
  title: 'Components/Table',
  component: 'in-tablecard',
};

const columnData = [
  {
    property: 'email',
    label: 'email address',
    index: 0,
    align: 'left',
  },
  {
    property: 'postalCode',
    label: 'postal code',
    index: 5,
    align: 'left',
  },
  {
    property: 'region',
    label: 'state',
    index: 4,
    align: 'left',
  },
  {
    property: 'city',
    label: 'city',
    index: 3,
    align: 'left',
  },
  {
    property: 'street',
    label: 'street',
    index: 2,
    align: 'left',
  },
  {
    property: 'phoneNumber',
    label: 'phone number',
    index: 1,
    align: 'left',
  },
];

const rowData = [
  {
    email: 'joe@gmail.com',
    phoneNumber: '(310) 555 5555',
    street: '100 Camino Real',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90277',
  },
  {
    email: 'joe@gmail.com',
    phoneNumber: '(310) 555 5555',
    street: '100 Camino Real',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90277',
  },
  {
    email: 'joe@gmail.com',
    phoneNumber: '(310) 555 5555',
    street: '100 Camino Real',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90277',
  },
  {
    email: 'joe@gmail.com',
    phoneNumber: '(310) 555 5555',
    street: '100 Camino Real',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90277',
  },
];

const TableContext = {
  rowData,
  columnData,
};

const Template = ({ context, channelName }) => {
  return html`<in-tablecard channel="${channelName}"></in-tablecard>`;
};

export const Primary = Template.bind({});
Primary.args = {
  channelName: 'table:one',
  context: TableContext,
};
