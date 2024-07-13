const fruits = [{name: "Apple" , color: "Red" , price: 20},
                {name: "Mango" , color: "Yellow" , price: 30},
                {name: "Grapes" , color: "Violet" , price: 40},
                {name: "Pineapple" , color: "Yellow" , price: 50}]

let maxPrice = fruits.reduce((max,fruit) => fruit.price > max.price ? fruit : max)

console.log(maxPrice)
