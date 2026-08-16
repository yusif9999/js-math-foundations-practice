// Lucky Customer and Gift Certificate Giveaway

let customerNames = ["Ahmet", "Ayse", "Yusuf", "Cigdem", "Koray"]

function luckyCustomer(customerList){
    let luckyCustomerWho = Math.floor(Math.random() * customerList.length)
    return luckyCustomerWho
}

let discountWinningCustomer = luckyCustomer(customerNames)
// console.log(discountWinningCustomer)

function discountCalculator(){
    let discountRate = Math.trunc((Math.random() * 90) + 10)
    let drawResult = `The lucky customer who won the discount: ${customerNames[discountWinningCustomer]}. The discount rate won: ${discountRate}. In this case, ${customerNames[discountWinningCustomer]} will earn a ${discountRate}% discount on every 1000 TL purchase. Instead of 1000 TL, they will only pay ${1000 - ((1000 * discountRate) / 100)} TL. Congratulations...`
    
    console.log(drawResult)
}

discountCalculator()