
/*
একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে।  কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং
সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে।
আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। 
সেগুলা রিটার্ন করে দিবে।
*/

let givendata = [67, 98 , 7, 90, 34, -6, -8, 78, 98];

function checkNumbers(numbers){
    let positiveNumbers = [];
    for(let i=0; i<=numbers.length; i++){
        var elemnt = numbers[i];
    if(elemnt < 0){
        break;
    }
    positiveNumbers.push(elemnt);
    } 
    return positiveNumbers;
}
let Output = checkNumbers(givendata);
let comment = "Positive numbers befoe any negetive numbers:"
console.log(comment, Output);