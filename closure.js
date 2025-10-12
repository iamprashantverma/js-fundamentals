function counter() {
    let count = 1;
    function incrementCounter() {
        return count++;
    }
    return incrementCounter;
}

let getCounter = counter();
console.log(getCounter()); // 1
console.log(getCounter()); // 2
console.log(getCounter()); // 3
