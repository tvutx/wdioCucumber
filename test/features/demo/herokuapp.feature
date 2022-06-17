Feature: Test Herokuapp login page

    Background: Launch Herokuapp homepage
    Given Herokuapp homepage is opened

    # @demo
    Scenario: Log in Herokuapp
        When I'm at the Herokuapp login page
        And I enter the username
        And I enter the password
        And I click on the login button
        Then I'm at the secure page

    # @demo
    Scenario: Go to the Dropdown page
        When I click on the dropdown link
        Then I'm at the dropdown page
        And I click on the dropdown list
        And I select option 1 from the dropdown list