function fetchUserData(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve({
              name: "Mohit",
              url: "https://codebasics.io/portfolio/Mohit-Gandhi",
            }
        );
            reject(console.log("error"))
        },3000)

    })
}

/* fetchUserData
.then()
.catch()*/

async function getuserdata(){
    try {
        console.log("getting user data ...");
        const userdata = await fetchUserData();
        console.log("User data: \n", userdata);
    } catch (error) {
        console.log("Error fetching data",error);
    }
}

getuserdata();