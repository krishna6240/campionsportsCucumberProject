package net.championsports.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.championsports.Pages.ContactUsPage;
import net.championsports.Pages.HomePage;
import org.checkerframework.checker.units.qual.C;

public class MyStepdefs {
    static String email1 = "abcde@gmail.com";
    static String Phone = "07447588091";
    static String PreferedPhoneNumber = "07447588091";

    @Given("^I am on home Page$")
    public void iAmOnHomePage() {
    }

    @When("^User can able to click On Skip Button$")
    public void userCanAbleToClickOnSkipButton() {
        new HomePage().clickOnSkipBtn();
      //  new HomePage().clickOnCookiesBtn();
    }

    @And("^User can able to click On about Us Functionality$")
    public void userCanAbleToClickOnAboutUsFunctionality() {
        new HomePage().mouseOverAndClickOnaboutUS();
        new HomePage().clickOnAboutUs();
    }

    @And("^User can able to click On Why Champion Sports Functionality$")
    public void userCanAbleToClickOnWhyChampionSportsFunctionality() {
        new HomePage().clickOnWhychampionSports();
    }

    @And("^User can able to click On OurTeam Functionality$")
    public void userCanAbleToClickOnOurTeamFunctionality() {
        new HomePage().clickOnOurTeam();
    }

    @And("^User can able to click On Company TimeLine Functionality$")
    public void userCanAbleToClickOnCompanyTimeLineFunctionality() {
        new HomePage().clickOnCompanyTimeLine();
    }

    @And("^User Can able to ContactUs Functionality$")
    public void userCanAbleToContactUsFunctionality() {
        new ContactUsPage().clickOnContactUsBtn();

    }

    @And("^I enter FirstName \"([^\"]*)\"$")
    public void iEnterFirstName(String name) {
        new ContactUsPage().enterFirstName(name);
    }

    @And("^I enter LastName \"([^\"]*)\"$")
    public void iEnterLastName(String name) {
        new ContactUsPage().enterLastName(name);

    }

    @And("^I enter Email Address$")
    public void iEnterEmailAddress() {
        new ContactUsPage().enterEmail(email1);
    }

    @And("^I enter Phone Number$")
    public void iEnterPhoneNumber() {
        new ContactUsPage().enterPhoneNumber(Phone);
    }

    @And("^I select Preferred Method Of Contact$")
    public void iSelectPreferredMethodOfContact() {
       // new ContactUsPage().selectPreferedMethodOfContact();
        //new ContactUsPage().clickOnphone();
    }

    @And("^I enter Preferred Contact Phone Number$")
    public void iEnterPreferredContactPhoneNumber() {
        new ContactUsPage().enterPreferedPhoneNumber(PreferedPhoneNumber);
    }

    @And("^I Select News and magazine From How did you hear about champions sports Drop Down Menu$")
    public void iSelectNewsAndMagazineFromHowDidYouHearAboutChampionsSportsDropDownMenu() {
        new ContactUsPage().selectHearAbout();
        new ContactUsPage().selectNewsAndMagazine();
    }

    @And("^I click On Sports Books$")
    public void iClickOnSportsBooks() {
        new ContactUsPage().clickOnSportsBook();
    }

    @And("^I enter Comments in Comment Section \"([^\"]*)\"$")
    public void iEnterCommentsInCommentSection(String text) {
        new ContactUsPage().enterComments(text);

    }

    @Then("^I click On send Button$")
    public void iClickOnSendButton() {
        new ContactUsPage().clickOnSendBtn();
    }
}
