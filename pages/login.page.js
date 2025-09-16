import { clickAndWait } from "../utils/helper.js";

class LoginPage {
  get signInButton() {
    return $(`android=new UiSelector().text("Sign in")`);
  }
  get emailField() {
    return $(`android=new UiSelector().resourceId("login_email_input")`);
  }
  get passwordField() {
    return $(`android=new UiSelector().resourceId("login_password_input")`);
  }
  get continueButton() {
    return $(`android=new UiSelector().text("Continue")`);
  }
  get skipButton() {
    return $(`android=new UiSelector().text("Skip")`);
  }

  async login(email, password) {
    await clickAndWait(this.signInButton);
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await clickAndWait(this.continueButton);
    await clickAndWait(this.skipButton);
  }
}

export default new LoginPage();
