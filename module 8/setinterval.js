function hello(){
    console.log("hello")
}

let timer= setInterval(hello,1000)  //execute this method in every 1 sec

setTimeout(function(){
    clearInterval(timer)
},5000)