//create a loop iterating over iterable object
//including : build-in string ,array,array like object

var scores =[65,87,99,17]

for(var score of scores){
    console.log(score)
}

//method entries

let colors=['red','yellow','pink','black']

for(var [index,color] of colors.entries()){
    console.log(index +"="+color)
}

var name="dhruvi"

for(var ch of name){
    console.log(ch)
}

var marks =[65,87,99,17]

for(var mark of marks){
    console.log(mark+5)
}
