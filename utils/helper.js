export async function clickAndWait(element, wait = 400, timeout = 7000) {
  await element.waitForDisplayed({ timeout });
  await element.waitForEnabled({ timeout });

  let clicked = false;
  let attempts = 0;
  while (!clicked && attempts < 20) {
    try {
      await element.click();
      clicked = true;
    } catch (error) {
      attempts++;
      console.warn(`Retrying click... attempt ${attempts}`);
      await browser.pause(wait);
    }
  }

  if (!clicked) throw new Error("Element not clickable after 20 attempts");
  await browser.pause(wait);
}
