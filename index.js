// var array1 = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// var array2 = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
// var array3 = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
function theBeatlesPlay(array1, array2) {
  var arr = [];
  for(var i=0; i<array1.length; i++){
      arr.push(array1[i] + " plays " + array2[i]);
  }
  return arr;
}
function johnLennonFacts(array3) {
  var i = 0;
  while(i<array3.length) {
    array3[i]+="!!!";
    i++;
  }
  return array3;
}