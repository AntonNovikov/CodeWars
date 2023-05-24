var isAnagram = function(test, original) {
    return test.toLowerCase().split("").sort().join("") ===original.toLowerCase().split("").sort().join("")
  };


  var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };

//   https://www.codewars.com/kata/529eef7a9194e0cbc1000255/solutions/javascript