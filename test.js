export default (initialName, initialAge) => ({
  // name: 'Alex',
  name: initialName,
  age: 0,

  log(){
    console.log(this.name);
    this.age = initialAge;
  },
  init(){
    console.log('initial ' + initialName)
  }
})
