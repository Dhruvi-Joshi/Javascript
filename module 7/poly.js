//polymorphism
//same name function call differently and gve different result
class animal{
    sound(){
        console.log('animals amke different sound')
    }
}

class cat{
    sound(){
        console.log('cat mews')
    }
}

class dog{
    sound(){
        console.log('dog barks')
    }
}

let animals=new animal()
let dogs=new dog()
let cats=new cat()
animals.sound()
dogs.sound()
cats.sound()