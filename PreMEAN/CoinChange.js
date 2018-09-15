// function CoinChange(num){
//     var change = {}
//     if(num >= 100){
//         change["dollars"] = Math.floor(num/100)
//         num -= change["dollars"]*100
//     }
//     if(num >= 25){
//         change["quarters"] = Math.floor(num/25)
//         num -= change["quarters"]*25
//     }
//     if(num >= 10){
//         change["dimes"] = Math.floor(num/10)
//         num -= change["dimes"]*10
//     }
//     if(num >= 5){
//         change["nickels"] = Math.floor(num/5)
//         num -= change["nickels"]*5
//     }
//     if(num < 5){
//         change["pennies"] = num
//     }
//     console.log(change)
// }

// CoinChange(371)

function ProperChange(dict){
    num = 0
    if(dict["dollars"] != null){
        num += dict["dollars"]*100
    }
    if(dict["quarters"] != null){
        num += dict["quarters"]*25
    }
    if(dict["dimes"] != null){
        num += dict["dimes"]*10
    }
    if(dict["nickels"] != null){
        num += dict["nickels"]*5
    }
    if(dict["pennies"] != null){
        num += dict["pennies"]
    }
    console.log(num)
    var change = {}
    if(num >= 100){
        change["dollars"] = Math.floor(num/100)
        num -= change["dollars"]*100
    }
    if(num >= 25){
        change["quarters"] = Math.floor(num/25)
        num -= change["quarters"]*25
    }
    if(num >= 10){
        change["dimes"] = Math.floor(num/10)
        num -= change["dimes"]*10
    }
    if(num >= 5){
        change["nickels"] = Math.floor(num/5)
        num -= change["nickels"]*5
    }
    if(num < 5 && num > 0){
        change["pennies"] = num
    }
    console.log(change)
}

ProperChange({"dollars":2, "dimes":15, "pennies":5})