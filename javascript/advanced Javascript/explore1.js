//Core Javascript is Synchronous and single-threaded language, but it peforms asynchronus operations through the runtime enviornment's feature like node.js or bun and manages them using the event loop.
function sayhello(){
    console.log("han bhai kya hal chal hai");
}

setTimeout(() => {
  sayhello();
}, 2000);

for (let index = 0; index < 10; index++) {
    console.log(index);
}
//i want to change the sequence i cannot do this with core javascript i have to use asynchronus programing to do that
 

