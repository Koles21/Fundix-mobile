import { clickAndWait } from "../utils/helper.js";

class PortfolioPage {
  get portfolioTab() {
    return $(`android=new UiSelector().resourceId("portfolio_tab")`);
  }
  get position() {
    return $(`android=new UiSelector().descriptionContains("USDJPY")`);
  }
  get closePositionButton() {
    return $(`android=new UiSelector().description("Close")`);
  }
  get confirmCloseButton() {
    return $(`android=new UiSelector().text("Confirm")`);
  }
  get noOpenPositionsText() {
    return $(`android=new UiSelector().text("No open positions")`);
  }

  async verifyAndClosePosition() {
    await clickAndWait(this.portfolioTab);
    await browser.pause(2000);
    await clickAndWait(this.position);
    await clickAndWait(this.closePositionButton);
    await clickAndWait(this.confirmCloseButton);

    await browser.waitUntil(
      async () => await this.noOpenPositionsText.isDisplayed(),
      { timeout: 5000, timeoutMsg: "Position not closed successfully" }
    );
  }
}

export default new PortfolioPage();
