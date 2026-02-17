/* Promise is created with new Keywowrd it takes a call back with 2 parameterd resolve and reject resolve is for success and reject is something goes failure */
function fetchdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            let success = false;
            if(success) {
                resolve("data Fetched Succesfully");
            }else{
                reject("Error Fetching data");
            }
        },3000);
    });
}

let response = fetchdata()
                   .then((data) => console.log(data))
                   .catch((error) =>console.log(error))
console.log(response);