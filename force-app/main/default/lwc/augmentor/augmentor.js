import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    
    handleStartChange(event) {
      this.startCounter = parseInt(event.target.value, 10);
      /* El radix (o base) es el sistema numérico en el que un número está representado. Por ejemplo:
      
      Base 10 (Decimal): Usa dígitos del 0 al 9.
      Base 2 (Binario): Usa solo 0 y 1.
      Base 8 (Octal): Usa dígitos del 0 al 7.
      Base 16 (Hexadecimal): Usa dígitos del 0 al 9 y letras de la A a la F.
      */
    }

    handleMaximizeCounter() {
        this.template.querySelector('c-numerator').maximizeCounter();
      }
}