const cities =['Manchester','Liverpool','Ediburgh','Dundee','Perth','Glasgow'];

for(let city of cities){
    console.log(`I love ${city}`);
}

const prices =[1,20,2,3,40,5.60]

for(let counter = 0;counter <prices.length;counter++){
    let tenPercent = prices[counter] / 10;
    prices[counter] = Math.round(prices[counter]+ tenPercent);
}
console.log("New prices" ,prices);

let count = 1;
while(count <= 10){
    console.log(count);
    count++}