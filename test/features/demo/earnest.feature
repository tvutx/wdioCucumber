Feature: Tax calulations

    @demo
    Scenario: Verify CA tax calculation
        Given I open the site
        And I'm on the product page
        When I enter one in the zebra quantity box
        And I enter one in the lion quantity box
        And I enter one in the elephant quantity box
        And I enter one in the giraffe quantity box
        And I click select California from the dropdown
        And I click on the checkout button
        Then I'm on the confirm order page
        And I verify the subtotal is "$85.00"
        And I verify the taxes is "$6.80"
        And I verify the total is "$91.80"

    @demo
    Scenario: Checkout with no state selected
        Given I open the site
        And I'm on the product page
        When I click on the checkout button
        Then I verify the checkout error message "We're sorry, but something went wrong."