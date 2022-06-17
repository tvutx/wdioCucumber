import { assert } from "chai"

class ProductPage {
        // Page objects
        get pageTile() { return $(`h1`)}
        get zebraQuantity() { return $( `#line_item_quantity_zebra`)}
        get lionQuantity() { return $( `#line_item_quantity_lion`)}
        get elephantQuantity() { return $( `#line_item_quantity_elephant`)}
        get giraffeQuantity() { return $( `#line_item_quantity_giraffe`)}
        get stateDropdown() { return $(`select[name^=state]`)}
        get selectCaState() { return $(`select[name^=state] > option[value^="CA"]`)}
        get checkoutBtn() { return $(`[type="submit"]`)}

        // Page actions
        async validateTitle(){
                await this.pageTile.waitForDisplayed()
                await expect(this.pageTile).toHaveTextContaining("Welcome To Jungle Socks!")
        }

        async enterQuantity(num: number){
                await this.zebraQuantity.waitForDisplayed()
        }
}

export default new ProductPage()