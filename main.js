var nums = process.argv.slice(2); //takes in cmd line numbers in an array
var digitStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

var results = [];
for (n of nums){
    var currentNumString = "";

    while (n>0){
        var currentDigit = parseInt(n)%10;
        currentNumString = digitStrings[currentDigit] + currentNumString; //prepend currentDigit's word onto currentNumString
        n = Math.floor(n/10); //integer division
    }
    results.push(currentNumString);
}
console.log(results.toString());