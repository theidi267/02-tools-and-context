'use strict';

class List {
  constructor() {
    this.length = 0;
  }
  
  push(item) {
    this[this.length++] = item;
  }
  
  pop() {
    let item = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return item;
  }

  forEach(callback) {
    if ( typeof callback !== 'function' ) { throw new Error('Callback Required'); }
    for (let i = 0; i <= this.length - 1; i++) {
      callback(this[i], i);
    }
  }

  shift() {
    let item = this[0];  
    let array = [];      
    let length = this.length; 
     
    for (let i=0; i<length; i++){      
      if (this[i+1]){ 
        array[i] = this[i+1]; 
      }
      delete this[i];
      this.length--; 
    }     
    for (let i=0; i<array.length; i++) { 
      this.push(array[i]);
    }
    return item;
  }

  unshift(data) {

    let result = new List();
    result.push(data); 

    for (let i=0; i<this.length; i++) {

      result.push(this[i]);     
    }
    console.log(result);
    return result.length; 
  }
  
  map(callback) {
    if ( typeof callback !== 'function' ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }
}  
module.exports = List;