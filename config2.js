var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Day2/secondTest.js'],

onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Protractor/screenshots'
    }).getJasmine2Reporter());
 }
  
};


