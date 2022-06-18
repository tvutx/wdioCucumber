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

        async enterQuantityByProduct(num: number, productName: string){
                let product =  $(`#line_item_quantity_${productName}`)
                await product.waitForDisplayed()
                await product.setValue(num)
        }

        async selectState(state: string){
                let st = $(`select[name^=state] > option[value^=${state}]`)
                await st.waitForDisplayed()
                await st.click()
        }
}

export default new ProductPage()