describe("This is my second Protractor Test", function() {
	
	it("This application will add two numbers", function() {
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("2");
		element(by.buttonText("Go!")).click();
		//element(by.className("ng-binding")).getText();
		expect(element(by.className("ng-binding")).getText()).toEqual("70");
		
		
	});	
	
});