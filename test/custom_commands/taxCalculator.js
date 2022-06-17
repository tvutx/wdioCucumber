browser.addCommand("CalculateTax", function (quantity, price, state){
    let total
    let subtotal
    const ca = 1.08
    const ny = 1.06
    const mn = 1
    const otherStates = 1.05

    if(state === "ca") {
       return total = quantity * price * ca
    } else if(state === "ny") {
        return total = quantity * price * ny
    } else if(state === "mn") {
        return total = quantity * price * mn
    } else {
        return total = quantity * price * otherStates
    }
})