Feature: Add todo

  Background: Navigation
    Given I am on the application home page

  Scenario: Add Ironman to the list of heroes
    When I click on the "Heroes" link
    And I write "Ironman" in the hero name field
    And I click on the "Add hero" button
    Then I see a link named "Ironman"