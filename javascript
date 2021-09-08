using map method 
//Q-1
let numbers = [1, 4, 9,8,5]
let doubles = numbers.map(function (num) {
  return num * 2
});
  console.log(doubles);
Q-2
  let numbers = [1, 4, 9]
  let roots = numbers.map(function (num) {
    return Math.sqrt(num)
  })
  console.log(roots)
   Q-3
  var numbers = [65, 44, 12, 4];
  var newArr = numbers.map(myFunction)

  function myFunction(num) {
    return num * 10;
  }
  console.log(newArr);
   //Q-4
  var numbers = [65, 44, 12, 4];
  numbers.forEach(myFunction)

  function myFunction(item, index, arr) {
    arr[index] = item + 10;
  }
  console.log(numbers);
   //Q-5
  var numbers =[1,3,4,5,6,7,8];
  numbers.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
  });
  console.log(numbers);
   Q-6
   var numbers =[1,2,3,4,];
  numbers.forEach((number, index, array) => {
    console.log(array);
  });
   //Q-7
  var a = ["a", "b", "c"];
  for (var val of a) {
    console.log(val);
  }
   Q-8
  var a = [ "a", "b", "c","d", "e", "f"];
  for (let index = 0, len = a.length; index < len; ++index) {
    console.log(a[index]);
  }
   Q-9
  var a = ["a", "b", "c"];
  for (let index = a.length - 1; index >= 0; --index) {
    console.log(a[index]);
  }
//      //Q-10
  var words = ['hello', 'bird', 'table', 'football', 'pipe', 'code'];
  var capWords = words.forEach(capitalize);

  function capitalize(word, index, arr) {
    arr[index] = word[0].toUpperCase() + word.substring(1);
  }
  console.log(words);

  //Q-11
  let students = ['sonu', 'sunny', 'bitu'];

  students.forEach(myFunction);

  function myFunction(item) {

    console.log(item);
  }
   //Q-12
  var students = ['mohit', 'sunny', 'sumit'];

  students.forEach(element => {
    console.log(element);
  });
  //Callback
   //Q-13
  var arrayItems = ['item1', 'item2', 'item3'];
  var copyItems = [];

  for (let i = 0; i < arrayItems.length; i++) {
    copyItems.push(arrayItems[i]);
  }
  console.log(copyItems);

  // Using loop
   Q-14
  var arrayItems = ['item1', 'item2', 'item3'];
  var copyItems = [];

  // using forEach
  arrayItems.forEach(function (item) {
    copyItems.push(item);
  })
  console.log(copyItems);

 //Q-15
  let languages = ['Python', 'Javascript', 'PHP', 'Golang'];

  for (i = 0; i < languages.length; i++) {
    // console.log(languages[i])
  }
  console.log(languages);
  

   //Q-16
  let ranks = ['A', 'B', 'C'];
  for (let i = 0; i < ranks.length; i++) {
    // console.log(ranks[i]);
  }
  console.log(ranks);

  Q-17
  var arr = ['Wall-E', 'Up', 'Coco'];

arr.forEach(function(item) {
console.log(item);
})
//Q-18
var arr = [5,4,8,7];

arr.forEach(function(item,index,arr) {
console.log("item: " + item + " at index: " + index + " in the array: " + arr);
})
//Q-19
var a = ['mohit', 'sunny', 'sumit'];
a.forEach((entry) => {
  console.log(entry);
});
//Q-20
var companies = ["Apple", "Google", "Facebook"];

companies.forEach(company => {
  console.log(company);
});
