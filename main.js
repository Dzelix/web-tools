import Alpine from 'alpinejs'; 
import test from './test.js';

window.Alpine = Alpine;

Alpine.data('test', test);

Alpine.data('dropdown', () => ({
  open: false,
  counter: 10,
 
  toggle() {
    this.open = ! this.open
  },

  init(){
    this.$watch('open', val => {
      console.log(val);
    })
  }
}));

 
Alpine.start();