function shoping(input){

    let peterBudget = Number (input[0]);
    let numGraphicCards = Number (input[1]);
    let numProcessors = Number (input[2]);
    let numRAM = Number (input[3]);

    let priceGraphicCards = numGraphicCards * 250;
    let priceProcessor = numProcessors * (priceGraphicCards * 0.35);
    let priceRAM = numRAM * (priceGraphicCards * 0.10);
    let finalPrice = priceGraphicCards + priceProcessor + priceRAM;
    
        if(numGraphicCards > numProcessors){
           discount = finalPrice * 0.15;
           finalPrice = finalPrice - discount;
        }

    let difference = peterBudget - finalPrice
    let differenceFormat = Math.abs(difference).toFixed(2);
    
    if(difference < 0){
        console.log(`Not enough money! You need ${differenceFormat} leva more!`)
    }else{
        console.log (`You have ${differenceFormat} leva left!`)
    }
}
shoping(["900","2","1","3"])
shoping(["920.45","3","1","1"])