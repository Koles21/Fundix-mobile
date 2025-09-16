import { clickAndWait } from "../utils/helper.js";

class MarketPage {
  get marketTab() {
    return $(`android=new UiSelector().resourceId("markets_tab")`);
  }
  get usdJpyMarket() {
    return $(
      `android=new UiSelector().descriptionContains("USDJPY").clickable(true)`
    );
  }
  get oneHourButton() {
    return $(`android=new UiSelector().text("1H")`);
  }
  get sellButton() {
    return $(`android=new UiSelector().resourceId("assetDetails_sell_button")`);
  }
  get fiveThousandButton() {
    return $(`android=new UiSelector().text("5,000")`);
  }
  get sellNowButton() {
    return $(`android=new UiSelector().text("Sell now")`);
  }
  get toastMessage() {
    return $(`android=new UiSelector().resourceId("toastText1")`);
  }

  async openMarket() {
    await clickAndWait(this.marketTab);
    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("USDJPY"))`
    );
    await clickAndWait(this.usdJpyMarket);
  }

  async sellPosition() {
    await clickAndWait(this.oneHourButton);
    await clickAndWait(this.sellButton);
    await clickAndWait(this.fiveThousandButton);
    await clickAndWait(this.sellNowButton);

    await browser.waitUntil(async () => await this.toastMessage.isDisplayed(), {
      timeout: 5000,
      timeoutMsg: "Toast message not displayed after sell",
    });
  }
}

export default new MarketPage();
