package net.championsports.Pages;

import net.championsports.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='cancle_btn']")
    WebElement skip;
    @CacheLookup
    @FindBy(xpath = "//div[@class='agree_btn']")
    WebElement AcceptCookies;
    @CacheLookup
    @FindBy(xpath = "(//div[@class='list_name'][normalize-space()='about us'])[1]")
    WebElement aboutus;
    @CacheLookup
    @FindBy(css = "div[class='nav'] div:nth-child(2) div:nth-child(2) ul:nth-child(1) li:nth-child(1) div:nth-child(1)")
    WebElement aboutusclick;
    @CacheLookup
    @FindBy(xpath = "//div[@class='txt_nav']//li[contains(text(),'why champion sports')]")
    WebElement whychampionsport;
    @CacheLookup
    @FindBy(xpath = "//div[@class='txt_nav']//li[contains(text(),'our team')]")
    WebElement OurTeam;
    @CacheLookup
    @FindBy(xpath = "(//li[contains(text(),'company timeline')])[1]")
    WebElement companyTimeLine;


    public void clickOnSkipBtn() {
        pmMouseHoverAndClick(skip);
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void clickOnCookiesBtn() {
        clickOnElement(AcceptCookies);
    }

    public void mouseOverAndClickOnaboutUS() {
        pmDoMouseHoverNoClick(aboutus);

    }

    public void clickOnAboutUs() {
        clickOnElement(aboutusclick);
    }

    public void clickOnWhychampionSports() {
        clickOnElement(whychampionsport);
    }

    public void clickOnOurTeam() {
        clickOnElement(OurTeam);
    }

    public void clickOnCompanyTimeLine() {
        clickOnElement(companyTimeLine);
    }


}
