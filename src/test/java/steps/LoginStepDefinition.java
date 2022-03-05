package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPage; 

	@Given("^User is on Techfios login page$")
	public void User_is_on_Techfios_login_page() {
		initDriver();
		driver.get("https://techfios.com/billing/?ng=login/after/dashboard");
	}

	@When("^User enter user name as \"([^\"]*)\"$")
	public void User_enter_user_name_as(String username) throws InterruptedException {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(username);
		Thread.sleep(3000);
	}
	
	@When("^User enter password as \"([^\"]*)\"$")
	public void user_enter_password_as(String password) throws Throwable {
		loginPage.enterPassword(password);
		Thread.sleep(3000);
	}

	@And("^User click on Signin button$")
	public void user_click_on_Signin_button() throws Throwable {
		loginPage.clickSignInButton();
		Thread.sleep(3000);
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		System.out.println("User landed on Dashboardpage");
	}
}
