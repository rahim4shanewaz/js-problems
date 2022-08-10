/*
একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট 
প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে।
 এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া।
  এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

*/
const myAllFriends = ['Jobayer', 'Tajul', 'Prottasha', 'Sakib', 'Hridoy'];
function myBigFriend(friendsNames){
    let lengt = 0;
    let longest;
    for(let i=0; i<friendsNames.length; i++){
        let index = i;
        let element = friendsNames[index];
        
        if(element.length > lengt){
            lengt = element.length;
            longest = element;
        }
    }
    return longest;
}
myBigFriend(myAllFriends);
const Comments = 'Longest name of my friend:'
const Output = myBigFriend(myAllFriends);
console.log(Comments, Output);