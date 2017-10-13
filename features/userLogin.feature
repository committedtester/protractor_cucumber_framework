Feature: User login functionality for the way2.automation website

Background:  Login Page loads
Given I load the login page

Scenario: Verify Successfull login
When I enter username as "angular"
And I enter password as "password"
And I enter username2 as "angular"
And I click Login
Then I should see the "home" page
And Helper text should be displayed