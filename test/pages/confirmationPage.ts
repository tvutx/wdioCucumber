class ConfirmationPage {
    // Page objects
    get confirmHeader () {return $(`h1`)}
    get subtotal () {return $(`#subtotal`)}
    get taxes () {return $(`#taxes`)}
    get total () {return $(`#total`)}
    // Page actions
}

export default new ConfirmationPage();