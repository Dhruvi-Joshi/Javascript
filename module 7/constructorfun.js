function createcare(_name,_company,_color){
    // console.log(this)   //show empty object
    this.name=_name
    this.company=_company
    this.color=_color
    this.drive=function(){
        console.log(`I am driving ${this.name} and it is of ${this.color} color`)
    }
    
}

let car1=new createcare('x4','BMW','red')
let car2=new createcare('s-class','mercedes','white')
console.log(car1)
car1.drive()
console.log(car2)
car2.drive()