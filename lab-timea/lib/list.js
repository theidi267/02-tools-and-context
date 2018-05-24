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
    let array = [];      // have to make a new array for reindexing
    let length = this.length;  //the length of the list
     
    for (let i=0; i<length; i++){  //go through properties of the list
     
      if (this[i+1]){ //if there is a next property
        array[i] = this[i+1]; //assign teh new index in the new array
      }
      delete this[i]; //once done, delete the first propert(used to be item)
      this.length--; //decrement the length property
    }
     
    for (let i=0; i<array.length; i++) { //now we have the properties as an array
      this.push(array[i]);   // pushing them back reindexed into the object
    }
    return item;
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