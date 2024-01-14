const nameOnPass = "Rafa";
const nameOnId = "Rafael De Ambrosi";
const nameMatch = nameOnId === nameOnPass;
const length = 12;
const height = 30;
const doesLengthPass = length < 30;
const doesHeightPass = height < 55;
const isHandBaggageEligible = doesLengthPass && doesHeightPass;
const flightDes = "Buenos Aires";
const returnFrom = "Rome";
const isRoundTrip = flightDes === returnFrom;
const bookings = 14;
const totalCapacity = 70;
const isFlightAvailable = bookings < totalCapacity;
  
console.log("Passenger Name: " + nameOnPass);
console.log("ID confirmed? " + nameMatch);
console.log("Is Hand Baggage Eligible? " + isHandBaggageEligible);
console.log("Round Trip Check? " + isRoundTrip);
console.log("Are seats available? " + isFlightAvailable);

document.querySelector("#name").innerHTML = nameOnPass;
document.querySelector("#id").innerHTML = nameMatch;
document.querySelector("#bag").innerHTML = isHandBaggageEligible;
document.querySelector("#des").innerHTML = isRoundTrip;
document.querySelector("#seat").innerHTML = isFlightAvailable;
