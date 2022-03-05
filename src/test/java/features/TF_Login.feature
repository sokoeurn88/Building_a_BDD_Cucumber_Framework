Feature: Techfios login functionality validation 

Scenario: User should be able to login with valid credentials 
	Given User is on Techfios login page	 
	When User enter user name as "demo@techfios.com" 	
	When User enter password as "abc123" 	
	And User click on Signin button 
	Then User should land on Dashboard page
	
	
