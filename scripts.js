//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] – ages[0] is not allowed!
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//1c. Use a loop to iterate through the array and calculate the average age. 

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // my array with elements
let first = ages [ ages.lenght - ages.lenght] // first element of my Array
let last = ages[ages.lenght - 1]// its` the last element of my Array;
let dif = last - first // calculating the difference
console.log("The difference is: ${dif}");

//1b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

ages.push(44) //pushing a new age to the array

//1c. Use a loop to iterate through the array and calculate the average age. 

let sum = 0, avg = 0.0

for (let i = 0; i < ages.length; i++) {//running a loop to the length of the array

sum = sum + ages[i]//adding each age to the sum

}
avg = sum / ages.length//calculating avg

console.log(`The average of elements is: ${avg}`)//printing the average to the console

//2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
 

let names=[ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; // my Arrays called names
sum=0;
for (i = 0; i < names.length; i++); // my loop that itterate trough array and calculate number of letrers per name.

{
sum = sum + names[i].length;
}
console.log("Average  number of letters per name is : ", sum / names.length);// my result 

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let  con = names[0];// concatenating names

for (i = 1; i < names.length; i++) {
  con = con.concat(" ", names[i]);
}

console.log("result names: ", con);

//3.  How do you access the last element of any array?
let names(pop); // access to the last element of my array removing last element of an Array
console.log(names);
let names(push);//access to the last element of my array, by adding to the  end of the last element of an Array
console.log(names);
//4. How do you access the first element of any array ?
let names(shift)// getting access to the first element of the array by removing the first element
console log(names);
let names(unshift)//getting access to the first element of the array by adding  the first element 
console.log(names);

//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
var names = ["Lana ", "Roma", "Luca"]; 
var nameLengths = [1, 4, 5]; 
var nameLengths = [];

for (i = 0; i < names.length; i++);
{
nameLengths[i] = names[i].length;
}

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

sum=0;
for (i = 0; i < nameLengths.length; i++)// loop that itterate over namelengths 

{
sum = sum + nameLengths[i];// calculate sum of elements in the array
}
console.log("Sum of all elements in the nameLengths : ",sum);

//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatToItself(word, n){ // my function with two parametrs
let con= word;
for(i=1; i<=n; i++){
con = con.concat(word);
}
return con; // return word concatenated
}
console.log(concatToItself("Hello", 3));///printed result  the concatenated same word for n times.

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
let myFullName=(Svetlana, Iorio); { //my function consist of  first and last name
    let firstName = Svetlana; //first name
    let lastName = Iorio;// last name
    myfullName = $firstName, " ", lastName; // full name is separate by " " a space 
}
console.log(myfullName);// result 

//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
sumArrayOfNumbers = [3, 6, 8, 10, 57, 94];{ // created function with Array of numbers
    if (myArrayOfNumbers > 100) { // if/else statements inside the function if the summ of array of numbers 
        return true;
    } else {
        return false;
    }
}
console.log(sumArrayOfNumbers);//  returning result


//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.

let numbers = [3, 6, 8, 10, 57, 94]; //my array
let a;
let c;
    let sum = numbers.reduce((a, c) => a + c, 0);{ // my function that takes an array of numbers and return all the elements in the array
    let avg = sum / numbers.length; // count average
}
console.log(avg);//average result

// Returns true if average of one array in bigger than the other.

//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements

myArray=isAvgGreater([4,7,9,8,10],[1,2,3,4,5]);// my two arrays
function isAvgGreater(arr1, arr2) {    
var total1 = 0;
for(var i = 0; i < arr1.length; i++) {// count total of the fisrt array
    total1 += arr1[i];
}
var total2=0;
for(var i = 0; i < arr2.length; i++) { // count total of the second array
    total2 += arr2[i];
}
var avg1 = total1 / arr1.length;// finding average of array 1
var avg2 = total2 / arr2.length;// finding average of array 2
if (avg1>avg2){
    return true;// if/else statement  if avg 1>avg 2 - trur  , otherwise - false
}
else{
    return false;
}
}

console.log(myArray);// print result

//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// it returns true if it is hotoutside and moneyinpocket >10.5.
let  a=willBuyDrink(8,true); // create virable a 
function willBuyDrink(isHotOutside,moneyInPocket){  // written function and named willBuyDrink 
    if(isHotOutside && moneyInPocket>10.5){ // creted if/else statement that saying  if isHotOutside && moneyInPocket>10.5) that return - true, otherwise return - false
        return true;
    }
    else{
        return false;
    }
}
console.log(a); //get  the return result 

//13.  Create a function of your own that solves a problem. 
//13. Create half of the Cristmass tree
for (var i = 0; i < 8; i++) {
  for (var j = 0; j <= i; j++) {
     document.write("*"); 
  }
  document.write("<br>");
}