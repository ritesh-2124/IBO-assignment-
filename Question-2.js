// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]



function getUniquePrducts(listOfProducts){
    let ans = []
    for(let i=0; i<listOfProducts.length; i++){
       CheckData(ans , listOfProducts[i])
    }
   console.log(ans)
  }
  
  
  function CheckData(arr , el){
     let index = arr.findIndex(item => item.productName === el.productName)
  
    if(index === -1){
      arr.push(el)
    }else{
      arr[index].quantity+=el.quantity
    }
    return arr
  }
  
  getUniquePrducts(listOfProducts)