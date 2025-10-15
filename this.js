// var a =12;
// console.log(this.a);
// "use strict"

function name(a,b){
    console.log(this)
    console.log(a +b);
    return this.a + this.b;
}
console.log(new name(2,3));
