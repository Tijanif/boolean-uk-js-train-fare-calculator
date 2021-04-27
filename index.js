

const userName = prompt("What is your name")

console.log(userName)

const userTravelDistance = Number(prompt("How far are you traveling in Km? Price per travelled Km is £0.21")) 
console.log(userTravelDistance)

const pricePerKm = 0.21
const travelFare = userTravelDistance * pricePerKm

const juniorDiscount

alert(`Price per km is £0.21 you entered ${userTravelDistance} therefore you are paying £${travelFare} for your fare.`)

 // Junior passengers get 20% discount
 //  Senior passengers get 40% discount