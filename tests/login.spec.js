import { clickAndWait } from "../utils/helper.js";

describe("Fundix Mobile App", () => {
  it("should login, open position and logout", async () => {
    // --- LOGIN ---
    const signInButton = await $(`android=new UiSelector().text("Sign in")`);
    await clickAndWait(signInButton);

    const emailField = await $(
      `android=new UiSelector().resourceId("login_email_input")`
    );
    await emailField.setValue("aisana.b+1@amegacorp.com");

    const passwordField = await $(
      `android=new UiSelector().resourceId("login_password_input")`
    );
    await passwordField.setValue("Tester01");

    const continueButton = await $(`android=new UiSelector().text("Continue")`);
    await clickAndWait(continueButton);

    const skipButton = await $(`android=new UiSelector().text("Skip")`);
    await clickAndWait(skipButton);

    // --- OPEN POSITION ---
    const marketTab = await $(
      `android=new UiSelector().resourceId("markets_tab")`
    );
    await clickAndWait(marketTab);

    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("USDJPY"))`
    );

    const usdJpyMarket = await $(
      `android=new UiSelector().descriptionContains("USDJPY").clickable(true)`
    );
    await clickAndWait(usdJpyMarket);

    const oneHourButton = await $(`android=new UiSelector().text("1H")`);
    await clickAndWait(oneHourButton);

    const sellButton = await $(
      `android=new UiSelector().resourceId("assetDetails_sell_button")`
    );
    await clickAndWait(sellButton);

    const fiveThousandButton = await $(
      `android=new UiSelector().text("5,000")`
    );
    await clickAndWait(fiveThousandButton);

    const sellNowButton = await $(`android=new UiSelector().text("Sell now")`);
    await clickAndWait(sellNowButton);

    // Wait for toast message
    await browser.waitUntil(
      async () =>
        (
          await $(`android=new UiSelector().resourceId("toastText1")`)
        ).isDisplayed(),
      { timeout: 5000, timeoutMsg: "Toast message not displayed after sell" }
    );
    // --- VERIFY IN PORTFOLIO ---
    const portfolioTab = await $(
      `android=new UiSelector().resourceId("portfolio_tab")`
    );
    await clickAndWait(portfolioTab);
    await browser.pause(2000);
    const position = await $(
      `android=new UiSelector().descriptionContains("USDJPY")`
    );
    await clickAndWait(position);

    const closePositionButton = await $(
      `android=new UiSelector().description("Close")`
    );
    await clickAndWait(closePositionButton);

    const confirmClosingPositionButton = await $(
      `android=new UiSelector().text("Confirm")`
    );
    await clickAndWait(confirmClosingPositionButton);

    await browser.waitUntil(
      async () =>
        (
          await $(`android=new UiSelector().text("No open positions")`)
        ).isDisplayed(),
      { timeout: 5000, timeoutMsg: "Position not closed successfully" }
    );
    await browser.pause(3000);

    // --- LOGOUT ---
    const profileButton = await $(
      `android=new UiSelector().className("com.horcrux.svg.PathView").instance(0)`
    );
    await clickAndWait(profileButton);
    await browser.pause(2000);

    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Legal documents"))`
    );
    const signOutButton = await $(
      `android=new UiSelector().text("Sign out").clickable(true)`
    );
    await clickAndWait(signOutButton);
  });
});
