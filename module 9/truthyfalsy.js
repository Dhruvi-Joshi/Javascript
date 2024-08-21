// let a = 10
// let a =0
// let a ='dhruvi'
let a = '' 

if(a){
    console.log('truthy')
    //[],{}
}
else{
    console.log('falsy')
    //false
    //0
    //-0
    //0n
    //'',"",``
    //null
    //undefined
    //NaN
}

(function(){
    if((-100 && 100 && "0") || [] === true || 0){
        console.log(1);
        if([] || (0 && false)){
            console.log(2);
        }

        if(Infinity && NaN && "FALSE"){
            console.log(3);
            if(""){
                console.log(4);
            }    
        }
        else{
            console.log(5);
            if(({} || false === "") &&  !(null && undefined)){
                console.log(6);
            }
        }
    }
})();

