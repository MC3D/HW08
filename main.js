var myArray = [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1,{},[],[12],['something'],function(){}];

myArray.map(function(item) {
  return(item+"")
})

myArray.map(function(item) {
  return(+item)
})

myArray.map(function(item) {
  return(!!item)
})
