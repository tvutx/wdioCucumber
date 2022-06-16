Feature: Test Herokuapp login page

    @demo
    Scenario: Log in Herokuapp
        Given I'm at the Herokuapp login page
        And I enter the username
        And I enter the password
        When I click on the login button