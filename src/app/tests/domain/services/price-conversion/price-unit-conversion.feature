Feature: Connected user info

  Scenario: pence/therm to euro/mwh conversion
    Given A price with a value of 11.25 expressed in "pence/therm"
    When converting this value to "euro/mwh"
    Then the result should be 5.625
