var numberOfColumns = function(length){
    var n = 1;
    while (length > (n * n)){
        n ++;
    };
    return n;
}


var cryptosquare = function (str){
  str = str.replace(/ /g, "").replace(".", "").replace("!", "").replace("?", "").replace("&", "").replace(/,/g, "").toLowerCase();
  var columns = numberOfColumns(str.length);
  var result = "";
  var counter = 0;
  for (var i = 0; i < columns; i ++){
    for (var j = i; j < str.length; j += columns){
      if ((counter % 5) === 0){
        result = result.concat(" ");
      }
      result = result.concat(str[j]);
      counter ++;
    }
  }
  return result;
}
