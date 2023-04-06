function lunchBreak(input){

    let serialName = (input[0]);
    let serialTime = Number (input[1]);
    let breakTime = Number (input[2]);

    let lunchTime = breakTime / 8;
    let restingTime = breakTime / 4;
    let lunchResingSum = lunchTime + restingTime;
    let freeTime = breakTime - lunchResingSum;
    let compleateTime = Math.abs(serialTime - freeTime);
    let formatCompleateTime = Math.ceil(compleateTime)

    if(serialTime <= freeTime){
        console.log(`You have enough time to watch ${serialName} and left with ${formatCompleateTime} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${serialName}, you need ${formatCompleateTime} more minutes.`)
    }

}

lunchBreak (["Game of Thrones","60","96"])
lunchBreak (["Teen Wolf","48","60"])

