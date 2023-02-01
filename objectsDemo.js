let person = {
    firstName:'Brad',
    lastName:'Tolson',
    age: 37
}

// console.log(person['lastName'])

let meal = {
    appetizer: 'cheese fries',
    entree: 'pizza',
    dessert: 'cheesecake',
    drink: 'rootbeer'
}

let {entree} = meal

// console.log(entree)
// console.log(meal.entree)


let {appetizer, dessert, drink: bestDrinkEver} = meal

// console.log(appetizer,dessert,bestDrinkEver)

// for(key in meal){
//     console.log(meal[key])
// }

person.job = 'Student'
person.isCool = true

delete person.age

person.isCool = false

// console.log(person)

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }

    speak(times){
        for(let i=0;i<times;i++){
        console.log(`hello my name is ${this.name}`)
    }
    }
}

let Baela = new Dog('Baela', 'pyranease', 2)

// Baela.speak(4)

class Puppy extends Dog {
    constructor(name,breed,age,trainingLevel){
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }
}

let Jake = new Puppy('Jake', 'lab', 3,0)

// Jake.levelUp(4)
// Jake.speak(5)
Jake.breed = 'black lab'
Jake['breed'] = 'brown lab'
console.log(Jake)

let names = ['jack', 'rocky', 'jeff', 'bob', 'steve']
let breeds = ['boxer', 'lab', 'poodle', 'doberman', 'pug']

let dogs = []

let makeDogs = () =>{
    for(let i = 0; i < names.length; i++){
        let newDog = new Dog(names[i],breeds[i],3)
        dogs.push(newDog)
    }
}

makeDogs()
// console.log(dogs)

for(let i = 0; i < dogs.length; i++){
    dogs[i].speak(1)
}