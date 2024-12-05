import { LightningElement, api } from 'lwc';
import { sum } from './sum';
  
export default class UnitTest extends LightningElement {
  @api unitNumber = sum(2,3);
  
  handleChange(event) {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.unitNumber = event.target.value; 
    // ESLint impide la reasignación interna de propiedades públicas, estas están destinadas a ser establecidas por el componente padre.
  }
}