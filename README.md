# :sparkles: Udacity Feed Reader Testing Project :sparkles:
 This is a web-based application that reads RSS feeds along with Jasmine and suite tests to automate the
 testing and make sure every thing is working correctly.

## How to run the Application
- Clone the repo in your device.
- Open index.html file in your browser.
- See how all the test are passing on the bottom of the page!

### Test Suites!
There are four main test suites for this application:
  - New Feed Selection , and it makes sure:
    - content changes when a new feed is loaded
  - Initial Entries , and it makes sure:
    - .feed container has at least a single entry element.
  - The Menu , and it makes sure :
    - changes visibility when the icon is clicked
    - element is hidden by default
  - RSS Feeds , and it makes sure :
     - have defined names which are not empty
     - have  URLs defined and that the URLs are not empty
     - They are defined

  ## Want the test to fail?!
  * You can play with **app.js** code in case you want for any of the tests to fail.
   *Ex: for the RSS Feeds test suite, change this code :
  ```
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
    }, {
        name: 'CSS Tricks',
        url: 'http://feeds.feedburner.com/CssTricks'
    }, {
        name: 'HTML5 Rocks',
        url: 'http://feeds.feedburner.com/html5rocks'
    }, {
        name: 'Linear Digressions',
        url: 'http://feeds.feedburner.com/udacity-linear-digressions'
    }
];
```
  **into this:**
```
var allFeeds = [
     {
         name: 'Udacity Blog',
         url: 'http://blog.udacity.com/feed'
     }, {
         name: 'CSS Tricks',
         url: 'http://feeds.feedburner.com/CssTricks'
     }, {
         name: '',
         url: 'http://feeds.feedburner.com/html5rocks'
     }, {
         name: 'Linear Digressions',
         url: ''
     }
 ];
```
