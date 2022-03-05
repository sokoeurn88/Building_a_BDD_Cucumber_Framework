$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/TF_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter user name as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 3083465700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.User_enter_user_name_as(String)"
});
formatter.result({
  "duration": 3099117500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.user_enter_password_as(String)"
});
formatter.result({
  "duration": 3062948500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_Signin_button()"
});
formatter.result({
  "duration": 4594128100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 183800,
  "status": "passed"
});
});