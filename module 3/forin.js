//for-in allow you to loop though the properties of object


//object
var colors={
    primary: 'red',
    secondary :'blue',
    tertiary :'white'
}

for (var col in colors){
    console.log(col ,":",colors[col])
}

//in array

var shape=['circle','square','star','triangle']

for(var no in shape){
    console.log(no +"->"+shape[no])   
}