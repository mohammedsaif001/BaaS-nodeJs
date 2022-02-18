var rect = require('./rectangle')

function solveRect(l,b){
    console.log(`Solving for ${l} & ${b}`)

    if(l<=0 || b<=0){
        console.log("Rectangle dimensions should be greater than 0")
    }
    else{
        console.log(`The area of the rectangle is ${rect.area(l,b)}`)
        console.log(`The Perimeter of the rectangle is ${rect.perimeter(l,b)}`)
    }
}

solveRect(10,20)
solveRect(1,2)