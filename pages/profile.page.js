import { clickAndWait } from "../utils/helper.js";

class ProfilePage {
  get profileButton() {
    return $(
      `android=new UiSelector().className("com.horcrux.svg.PathView").instance(0)`
    );
  }
  get signOutButton() {
    return $(`android=new UiSelector().text("Sign out").clickable(true)`);
  }

  async logout() {
    await clickAndWait(this.profileButton);
    await browser.pause(2000);
    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Legal documents"))`
    );
    await clickAndWait(this.signOutButton);
  }
}

export default new ProfilePage();
