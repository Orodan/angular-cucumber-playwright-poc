Feature: Add todo

  Background: Navigation
    Given I am on the application home page

  Scenario: Add Ironman to the list of heroes
    When I click on the "Bombasto" link
    And I write "Bombasta" in the hero name field
    And I click on the "save" button
    Then I see a link named "Bombasta"