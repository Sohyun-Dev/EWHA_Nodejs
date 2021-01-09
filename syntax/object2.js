// array, object

var f = function(){ // 값이 될 수 있음
  console.log(1+1);
  console.log(1+2);
}

// var i = if(true){console.log(1)}

// var w = while(true){console.log(1)};

var a = [f];
a[0]();

var o = {
  func:f
}
o.func();
