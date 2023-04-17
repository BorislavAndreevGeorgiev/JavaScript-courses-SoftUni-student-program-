function yardGreening(input){
    let m2 = input[0];
    let m2Price = input[0] * 7.61;
    let dicount = m2Price * 0.18 ;
    let finalPrice = m2Price - dicount ;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${dicount} lv.`);
}

yardGreening(["150"])
