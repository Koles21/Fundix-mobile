import LoginPage from "../pages/login.page";
import MarketPage from "../pages/market.page.js";
import PortfolioPage from "../pages/portofolio.page.js";
import ProfilePage from "../pages/profile.page.js";

describe("Fundix Mobile App", () => {
  it("should login, open position, close position and logout", async () => {
    await LoginPage.login("aisana.b+1@amegacorp.com", "Tester01");
    await MarketPage.openMarket();
    await MarketPage.sellPosition();
    await PortfolioPage.verifyAndClosePosition();
    await ProfilePage.logout();
  });
});
