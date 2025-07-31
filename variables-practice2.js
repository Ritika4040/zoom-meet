/* DATA TYPES IN JS
Number,string,boolean,undefined,null,bight,symbol
*/
a=24;
p= 100.5;
fullname='tony';
isfollow='True';
console.log(fullname);
console.log(a);
console.log(p);
 
/*practice question-1 create a const object called product to 
store the information shown in the there */
const product={
    title:"ball pen",
    rating:4,
    offer:5,
    price:270
};
console.log(product);
 
/*practice question-2 create a const object called 'profile'
 to store info about it ? */
 const profile={
    username:"Ritikadwivedi",
    isfollow:false,
    followers:144,
    following:80,
 };
 console.log(profile);
 console.log(typeof profile);
 console.log(typeof profile["isfollow"]);

 /* OUTPUT
 tony
 100.5
{title: 'ball pen', rating: 4, offer: 5, price: 270}
{username: 'Ritikadwivedi', isfollow: false, followers: 144, following: 80}
object
boolean
*/



