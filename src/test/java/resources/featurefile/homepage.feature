Feature: ChampionSports Webservice

  @Regression
  Scenario: As A User I can able to Explore Webservice And contactus Functionality
    Given I am on home Page
    When User can able to click On Skip Button
    And User can able to click On about Us Functionality
    And User can able to click On Why Champion Sports Functionality
    And User can able to click On OurTeam Functionality
    And User can able to click On Company TimeLine Functionality
    And User Can able to ContactUs Functionality
    And I enter FirstName "Anand"
    And I enter LastName "Tripathi"
    And I enter Email Address
    And I enter Phone Number
   #And I select Preferred Method Of Contact
    And I enter Preferred Contact Phone Number
    #And I Select News and magazine From How did you hear about champions sports Drop Down Menu
    And I click On Sports Books
    And I enter Comments in Comment Section "Hellooooooooooo"
    Then I click On send Button

