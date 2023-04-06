function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let depositPeriot = Number(input[1]);
    let yearPercent = Number(input[2]);
    let sum = depositSum + depositPeriot * ((depositSum * yearPercent / 100) /12);
    console.log(sum) 

}

depositCalculator(["2350 ", "6 ", "7 "])