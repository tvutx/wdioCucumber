Feature: Demo feature

    # @demo
    Scenario Outline: Run first demo feature
        Given A web page is opened
        When Perform web interactions

        Examples:
            | TestID    |
            | WEB_TC001 |