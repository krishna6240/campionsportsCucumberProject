package net.championsports.Pages;

import net.championsports.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContactUsPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    public ContactUsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'contact us')]")
    WebElement contactus;
    @CacheLookup
    @FindBy(xpath = "(//input[@placeholder='*First Name'])[1]")
    WebElement firstName;
    @CacheLookup
    @FindBy(xpath = "(//input[@placeholder='*Last Name'])[1]")
    WebElement lastname;
    @CacheLookup
    @FindBy(xpath = "(//input[@placeholder='Email Address……'])[1]")
    WebElement email;
    @CacheLookup
    @FindBy(xpath = "(//input[@placeholder='Phone Number……'])[1]")
    WebElement phoneNumber;
    @CacheLookup
    @FindBy(xpath = "(//i[@class='ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow'])[2]")
    WebElement skype;
    @CacheLookup
    @FindBy(xpath = "(//li[@class='ivu-select-item ivu-select-item-selected ivu-select-item-focus'])[1]")
    WebElement preferedphone;
    @CacheLookup
    @FindBy(xpath = "(//input[@placeholder='ID or numbers……'])[1]")
    WebElement phone;
    @CacheLookup
    @FindBy(xpath = "(//span[@class='ivu-select-placeholder'][normalize-space()='How Did You Hear About Champion Sports?'])[1]")
    WebElement hearAbout;
    @CacheLookup
    @FindBy(xpath = "(//li[@class='ivu-select-item'][normalize-space()='News & Magazine'])[1]")
    WebElement newsMagazine;
    @CacheLookup
    @FindBy(css = "div[class='txt_msg_box'] input[value='Sportsbook']")
    WebElement sportBook;
    @CacheLookup
    @FindBy(xpath = "(//textarea[@placeholder='Please leave your comments...'])[1]")
    WebElement comments;
    @CacheLookup
    @FindBy(xpath = "(//div[@class='form_btn'][normalize-space()='send'])[1]")
    WebElement sendBtn;

    public void clickOnContactUsBtn() {
        clickOnElement(contactus);
    }

    public void enterFirstName(String name) {
        sendTextToElement(firstName, name);
    }

    public void enterLastName(String name) {
        sendTextToElement(lastname, name);
    }

    public void enterEmail(String email1) {
        sendTextToElement(email, email1);
    }

    public void enterPhoneNumber(String number) {
        sendTextToElement(phoneNumber, number);
    }

    public void selectPreferedMethodOfContact() {
        pmMouseHoverAndClick(skype);
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
    public void clickOnphone(){
        clickOnElement(preferedphone);
    }

    public void enterPreferedPhoneNumber(String number) {
        sendTextToElement(phone, number);
    }

    public void selectHearAbout() {
        clickOnElement(hearAbout);
    }

    public void selectNewsAndMagazine() {
        clickOnElement(newsMagazine);
    }

    public void clickOnSportsBook() {
        clickOnElement(sportBook);
    }

    public void enterComments(String text) {
        sendTextToElement(comments, text);
    }

    public void clickOnSendBtn() {
        clickOnElement(sendBtn);
    }

}
