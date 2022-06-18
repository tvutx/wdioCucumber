class ConfirmationPage {
    // Page objects
    get confirmHeader () {return $(`h1`)}
    get subtotal () {return $(`#subtotal`)}
    get taxes () {return $(`#taxes`)}
    get total () {return $(`#total`)}
    get errorMessage () { return $(`div > h1`)}
    // Page actions
}

export default new ConfirmationPage();