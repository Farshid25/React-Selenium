var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");

// Application Server
const serverUri = "http://localhost:3000";
const appTitle = "React Selenium App";

// var browser = new webdriver.Builder()
//   .usingServer()
//   .withCapabilities({ browserName: "chrome" })
//   .build();

// browser.get(serverUri);
// console.log("dit " + browser.getTitle());

// function logTitle() {
//   return new Promise((resolve, reject) => {
//     browser.getTitle().then(function(title) {
//       resolve(title);
//     });
//   });
// }

// describe("Home Page", function() {
//   /**
//    * Test case to load our application and check the title.
//    */
//   it("Should load the home page and get title", function() {
//     return new Promise((resolve, reject) => {
//       browser
//         .get(serverUri)
//         .then(logTitle)
//         .then(title => {
//           assert.strictEqual(title, appTitle);
//           resolve();
//         })
//         .catch(err => reject(err));
//     });
//   });
// });

var browser = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

browser.get(serverUri);

// incremnts
var findIncrementById = browser.findElement(webdriver.By.id("1")).click();

//var findMinusByName = browser.findElement(webdriver.By.name("minus1")).click();

var findIncrementByTag = browser
  .findElement(webdriver.By.name("delete3"))
  .click();

console.log("dit " + browser.getSession);
