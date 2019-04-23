var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("chromedriver");

// Application Server
const serverUri = "http://localhost:3000";
const appTitle = "React Selenium App";

var browser = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

browser.get(serverUri);

// deletes
var findDeleteByName = browser
  .findElement(webdriver.By.name("delete1"))
  .click();

var findDeleteByName2 = browser
  .findElement(webdriver.By.name("delete2"))
  .click();

var findIncrementById = browser.findElement(webdriver.By.id("3")).click();

console.log("dit " + browser.getTitle);
