var rect = require('./rectangle')

function solveRect(l,b){
    console.log(`Solving for ${l} & ${b}`)

   rect(l,b,(err,rectangle)=>{
       if(err){
           console.log(`Error: ${err.message}`)
       }
       else{
           console.log(`The Area of the rectangle with the dimensions ${l} & ${b} is ${rectangle.area()}`)
           console.log(`The Perimeter of the rectangle with the dimensions ${l} & ${b} is ${rectangle.perimeter()}`)
       }
   })
   console.log("\nCompleted the Function\n")
}

solveRect(10,20)
solveRect(0,20)
solveRect(1,2)