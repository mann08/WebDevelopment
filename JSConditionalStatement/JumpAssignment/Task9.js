function totalprice(price, tax) {
    return price + tax;
}

let price = 100;
let tax = 20;
let finalPrice = totalprice(price, tax);
console.log("Final Price:", finalPrice);