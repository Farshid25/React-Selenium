var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");

// Application Server
const serverUri = "http://localhost:3000";
const appTitle = "React Selenium App";

var browser = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.firefox())
  .build();

browser.get(serverUri);

// incremnts
var findIncrementById = browser.findElement(webdriver.By.id("1")).click();
var findIncrementById2 = browser.findElement(webdriver.By.id("2")).click();

//var findMinusByName = browser.findElement(webdriver.By.name("minus1")).click();

// deletes
var findDeleteByName = browser
  .findElement(webdriver.By.name("delete3"))
  .click();

console.log("dit " + browser.getTitle);
