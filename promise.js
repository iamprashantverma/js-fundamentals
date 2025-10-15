const promise = new Promise((res, rej) => {
    let flag = Math.floor(Math.random() * 2); 
    if (flag === 1) 
        res("Success mil gya");  
    else 
        rej("Reject ho gya");    
});

promise
  .then(result => console.log("Resolved:", result))
  .catch(error => console.log("Rejected:", error));

console.log("Hello");

