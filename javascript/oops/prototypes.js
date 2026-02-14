/* how to implement prototype */
let genericar = {
    tyres: 4,
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla,genericar);
console.log('tesla',Object.getPrototypeOf(tesla));
