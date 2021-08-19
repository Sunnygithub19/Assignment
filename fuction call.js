//Questions on function
//1. Function (3,4) return max value
function max(num1, num2)
 {
  if (num1 > num2) 
  {
    return num1;
  } else 
  {
    return num2;
  }

}
var temp = max(3, 4);
console.log(temp);



//2. Function (array) 
//return multiply 2 in each value
function multiply(arr) 
{
  var i = 0;
  while (i < arr.length) 
  {
    arr[i] = arr[i] * 2;
    i++;
  }
  return arr;
}
var temp = multiply([1, 3, 4, 5]);
console.log(temp);





//3.function(Sunny) return Sunny kumar
(function (Sunny) 
{
  console.log("Sunny kumar");
})();

//4. Find max and return minimum value of array

function Min(arr) 
{
  var i = 0, min = arr[0], max = arr[0];
  while (i < arr.length) 
  {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    i++;
  }
  console.log("Max is:" + max)
  return min;
}

var temp = Min([2, 4, 6, 8]);
console.log("Min is:" + temp);

//5. Function name("sunny') return same alphabet no. Of times
//Example sunny:- 
//Return S1 u1 n2 y1
function getFrequency(string) 
{
  var freq = {};
  for (var i=0; i<string.length;i++) 
  {
      var character = string.charAt(i);
      if (freq[character])
       {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }

  return freq;
}; var temp = getFrequency("sunny");
 console.log(temp);