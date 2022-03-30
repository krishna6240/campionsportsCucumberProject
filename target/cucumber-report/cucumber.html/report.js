$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "ChampionSports Webservice",
  "description": "",
  "id": "championsports-webservice",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7015689900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As A User I can able to Explore Webservice And contactus Functionality",
  "description": "",
  "id": "championsports-webservice;as-a-user-i-can-able-to-explore-webservice-and-contactus-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User can able to click On Skip Button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User can able to click On about Us Functionality",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can able to click On Why Champion Sports Functionality",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can able to click On OurTeam Functionality",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User can able to click On Company TimeLine Functionality",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Can able to ContactUs Functionality",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter FirstName \"Anand\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter LastName \"Tripathi\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Phone Number",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#And I select Preferred Method Of Contact"
    }
  ],
  "line": 17,
  "name": "I enter Preferred Contact Phone Number",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And I Select News and magazine From How did you hear about champions sports Drop Down Menu"
    }
  ],
  "line": 19,
  "name": "I click On Sports Books",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Comments in Comment Section \"Hellooooooooooo\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click On send Button",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 303905000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userCanAbleToClickOnSkipButton()"
});
formatter.result({
  "duration": 7999835600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userCanAbleToClickOnAboutUsFunctionality()"
});
formatter.result({
  "duration": 370403600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userCanAbleToClickOnWhyChampionSportsFunctionality()"
});
formatter.result({
  "duration": 696392000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userCanAbleToClickOnOurTeamFunctionality()"
});
formatter.result({
  "duration": 628290100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userCanAbleToClickOnCompanyTimeLineFunctionality()"
});
formatter.result({
  "duration": 599431300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userCanAbleToContactUsFunctionality()"
});
formatter.result({
  "duration": 469491800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anand",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 705072300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tripathi",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 424869700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterEmailAddress()"
});
formatter.result({
  "duration": 772793000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterPhoneNumber()"
});
formatter.result({
  "duration": 519289000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterPreferredContactPhoneNumber()"
});
formatter.result({
  "duration": 532069400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSportsBooks()"
});
formatter.result({
  "duration": 1164352000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"checkbox\" class\u003d\"ivu-checkbox-input\" value\u003d\"Sportsbook\"\u003e is not clickable at point (611, 699). Other element would receive the click: \u003cdiv data-v-65ab3e09\u003d\"\" class\u003d\"aggre_box\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d100.0.4896.60)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DELL7480\u0027, ip: \u0027172.26.80.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b1bcc5e1e1d3cece8f022d6c412ede26, clickElement {id\u003d791061ac-d4b9-42f0-bfe2-d889fef931b6}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.60, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Krishna\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55970}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55970/devtoo..., se:cdpVersion: 100.0.4896.60, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (b1bcc5e1e1d3cece8f022d6c412ede26)] -\u003e css selector: div[class\u003d\u0027txt_msg_box\u0027] input[value\u003d\u0027Sportsbook\u0027]]\nSession ID: b1bcc5e1e1d3cece8f022d6c412ede26\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat net.championsports.utility.Utility.clickOnElement(Utility.java:132)\r\n\tat net.championsports.Pages.ContactUsPage.clickOnSportsBook(ContactUsPage.java:105)\r\n\tat net.championsports.cucumber.steps.MyStepdefs.iClickOnSportsBooks(MyStepdefs.java:94)\r\n\tat ✽.And I click On Sports Books(homepage.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hellooooooooooo",
      "offset": 37
    }
  ],
  "location": "MyStepdefs.iEnterCommentsInCommentSection(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSendButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1974589900,
  "status": "passed"
});
});