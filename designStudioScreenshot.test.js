const test_base_url = "http://localhost:8000";
const baseline_url = "http://localhost:8001";
const validUrls = [
  "/",
  "/about/",
  "/ux-ui-design-and-consulting-services/",
  "/mobile-app-ui-design-services/",
  "/web-app-design-services/",
  "/custom-website-design-development/",
  "/ui-ux-design-services-startup/",
  "/enterprise-ui-ux-design/",
  "/user-experience-research-consultant/",
  "/ux-audit-services/",
  "/brand-identity-design-services/",
  "/custom-wordpress-website-design-services/",
  "/custom-shopify-website-design/",
  "/webflow-web-design-agency/",
  "/woocommerce-website-design-services/",
  "/ecommerce-website-design-services/",
  "/saas-website-design-agency/",
  "/b2b-website-design-agency/",
  "/b2c-web-design-agency/",
  "/responsive-web-design-services/",
  "/website-redesign-services/",
  "/ui-ux-design-case-study/",
  "/ecommerce-website-redesign-services/",
  "/case-study/dashboard-ui-ux-design/",
  "/case-study/saas-app-design/",
  "/case-study/library-mobile-app-design/",
  "/case-study/ecommerce-fashion-website-design/",
  "/case-study/nft-marketplace-ui-design/",
  "/process/",
  "/blog/",
  "/contact/",
  "/terms/",
  "/privacy-policy/",
  "/faq/",
  "/blog/ux-content-strategy/",
  "/blog/what-is-neubrutalism-web-design-trend/",
  "/blog/what-is-microcopy-ux/",
  "/blog/what-is-storytelling-in-ux/",
  "/blog/what-is-agile-ux/",
  "/blog/heatmaps-to-improve-website-ux/",
  "/blog/why-website-redesign-is-important/",
  "/blog/data-visualization-ux-best-practices/",
  "/blog/what-is-tracking-in-typography/",
  "/blog/ui-ux-trends/",
  "/blog/saas-ux-design-the-ultimate-guide/",
  "/blog/ecommerce-web-design-trends/",
  "/blog/typography-trends-in-web-design-2023/",
  "/blog/dark-mode-ui-design-best-practices/",
  "/blog/why-mobile-first-design-important/",
  "/blog/why-is-typography-important-in-web-design/",
  "/blog/visual-hierarchy-design-principles/",
  "/blog/what-is-glassmorphism-ui-trend/",
  "/blog/how-to-choose-web-design-company/",
  "/blog/b2b-website-design-best-practices/",
  "/blog/mobile-app-design-best-practices/",
  "/blog/benefits-of-hiring-ui-ux-design-company/",
  "/blog/what-is-ux-strategy/",
  "/blog/voice-user-interface-design-guide/",
  "/blog/storyboard-web-design/",
  "/blog/neumorphism-ui-design/",
  "/blog/b2b-web-design-trends/",
  "/blog/how-responsive-web-design-gets-more-conversions/",
  "/blog/web-design-impacts-content-marketing/",
  "/blog/mobile-app-ui-ux-design-trends/",
  "/blog/top-ui-ux-design-agencies/",
  "/blog/importance-of-ui-ux-design-in-todays-digital-world/",
  "/blog/ux-design-tips-to-load-website-faster/",
  "/blog/the-ultimate-guide-to-ai-web-design/",
  "/blog/principles-of-good-website-design/",
  "/blog/heuristic-evaluation-in-ux-design/",
  "/blog/9-crucial-things-designers-miss-in-a-web-app-design/",
  "/blog/5-more-tips-for-mobile-app-design/",
  "/blog/10-ways-design-impacts-business-success/",
  "/blog/5-tips-for-mobile-app-design/",
  "/blog/why-we-all-need-design-led-content-marketing/",
  "/blog/the-ground-breaking-possibilities-with-neumorphism/",
  "/blog/3-ultimate-reasons-to-use-illustrations/",
  "/blog/why-honeypot-can-be-important-for-your-ui-ux/",
];
const allUrls = [
  "/",
  "/about/",
  "/ux-ui-design-and-consulting-services/",
  "/mobile-app-ui-design-services/",
  "/web-app-design-services/",
  "/custom-website-design-development/",
  "/ui-ux-design-services-startup/",
  "/enterprise-ui-ux-design/",
  "/user-experience-research-consultant/",
  "/ux-audit-services/",
  "/brand-identity-design-services/",
  "/custom-wordpress-website-design-services/",
  "/custom-shopify-website-design/",
  "/webflow-web-design-agency/",
  "/woocommerce-website-design-services/",
  "/ecommerce-website-design-services/",
  "/saas-website-design-agency/",
  "/b2b-website-design-agency/",
  "/b2c-web-design-agency/",
  "/responsive-web-design-services/",
  "/website-redesign-services/",
  "/ui-ux-design-case-study/",
  "/ecommerce-website-redesign-services/",
  "/case-study/dashboard-ui-ux-design/",
  "/case-study/saas-app-design/",
  "/case-study/library-mobile-app-design/",
  "/case-study/ecommerce-fashion-website-design/",
  "/case-study/nft-marketplace-ui-design/",
  "/process/",
  "/blog/",
  "/contact/",
  "/terms/",
  "/privacy-policy/",
  "/faq/",
  "/blog/ux-content-strategy/",
  "/blog/what-is-neubrutalism-web-design-trend/",
  "/blog/what-is-microcopy-ux/",
  "/blog/what-is-storytelling-in-ux/",
  "/blog/what-is-agile-ux/",
  "/blog/heatmaps-to-improve-website-ux/",
  "/blog/why-website-redesign-is-important/",
  "/blog/data-visualization-ux-best-practices/",
  "/blog/what-is-tracking-in-typography/",
  "/blog/ui-ux-trends/",
  "/blog/saas-ux-design-the-ultimate-guide/",
  "/blog/ecommerce-web-design-trends/",
  "/blog/typography-trends-in-web-design-2023/",
  "/blog/dark-mode-ui-design-best-practices/",
  "/blog/why-mobile-first-design-important/",
  "/blog/why-is-typography-important-in-web-design/",
  "/blog/visual-hierarchy-design-principles/",
  "/blog/what-is-glassmorphism-ui-trend/",
  "/blog/how-to-choose-web-design-company/",
  "/blog/b2b-website-design-best-practices/",
  "/blog/mobile-app-design-best-practices/",
  "/blog/benefits-of-hiring-ui-ux-design-company/",
  "/blog/what-is-ux-strategy/",
  "/blog/voice-user-interface-design-guide/",
  "/blog/storyboard-web-design/",
  "/blog/neumorphism-ui-design/",
  "/blog/b2b-web-design-trends/",
  "/blog/how-responsive-web-design-gets-more-conversions/",
  "/blog/web-design-impacts-content-marketing/",
  "/blog/mobile-app-ui-ux-design-trends/",
  "/blog/top-ui-ux-design-agencies/",
  "/blog/importance-of-ui-ux-design-in-todays-digital-world/",
  "/blog/ux-design-tips-to-load-website-faster/",
  "/blog/the-ultimate-guide-to-ai-web-design/",
  "/blog/principles-of-good-website-design/",
  "/blog/heuristic-evaluation-in-ux-design/",
  "/blog/9-crucial-things-designers-miss-in-a-web-app-design/",
  "/blog/a-comprehensive-guide-to-website-redesign/",
  "/blog/trends-in-ui-ux-designs-for-2023/",
  "/blog/5-more-tips-for-mobile-app-design/",
  "/blog/10-ways-design-impacts-business-success/",
  "/blog/5-tips-for-mobile-app-design/",
  "/blog/why-we-all-need-design-led-content-marketing/",
  "/blog/12-tips-to-create-effective-landing-pages/",
  "/blog/the-ground-breaking-possibilities-with-neumorphism/",
  "/blog/10-ui-ux-trends-in-2020/",
  "/blog/3-ultimate-reasons-to-use-illustrations/",
  "/blog/web-accessible-designs-part-ii/",
  "/blog/web-accessible-designs-part-i/",
  "/blog/a-day-at-wordcamp-kolkata-2019/",
  "/blog/15-best-places-to-find-free-stock-photos/",
  "/blog/10-ui-ux-design-trends-for-2019/",
  "/blog/7-ui-ux-design-rules-for-ecommerce-websites/",
  "/blog/the-pantone-colour-of-the-year-2019/",
  "/blog/10-free-sans-serif-futuristic-fonts-inspired-by-geometry/",
  "/blog/how-to-create-the-almost-perfect-user-centric-app/",
  "/blog/why-honeypot-can-be-important-for-your-ui-ux/",
  "/blog/10-rounded-fonts-for-offbeat-designs/",
  "/blog/what-is-design-sprint-and-when-to-use-it/",
  "/blog/case-study-ui-design-challenge-by-adobe-and-smashing-magazine/",
  "/blog/making-websites-more-humane/",
  "/blog/fonts-that-shape-the-future/",
  "/blog/material-design-is-not-the-end-of-creativity/",
  "/blog/remote-is-the-new-rage/",
  "/blog/brands-that-breathe/",
  "/blog/when-designs-turn-brutal/",
  "/blog/what-can-you-expect-from-webdesigns-in-2018/",
];

async function autoScroll(page) {
  try {
    await page.evaluate(async () => {
      // Scroll to the bottom of the page, so that all the content is visible and loaded
      await new Promise((resolve, reject) => {
        var totalHeight = 0;
        var distance = 100;
        var timer = setInterval(() => {
          var scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 50);
      });
      // Scroll back to the top of the page, so sticky menus will appear at the top
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  } catch (err) {
    console.log(err);
  }
}

const waitFor = () =>
  new Promise((resolve) => setTimeout(() => resolve(), 10000));

async function test(eachUrl) {
  console.log({ eachUrl });
  const testUrl = test_base_url + eachUrl;
  // const testUrl = baseline_url + eachUrl;

  console.log(testUrl);

  const page = await global.browser.newPage();

  await page.goto(testUrl, {
    waitUntil: ["networkidle2", "domcontentloaded"],
  });

  await autoScroll(page);

  await page.waitForNetworkIdle({ idleTime: 5000, timeout: 10000 });

  // Get scroll width and height of the rendered page and set viewport
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);

  await page.setViewport({
    width: 1440,
    height: bodyHeight,
  });

  await waitFor();

  const screenshot1 = await page.screenshot({
    fullPage: true,
  });

  await page.setViewport({
    width: bodyWidth,
    height: bodyHeight,
  });

  await waitFor();

  const screenshot2 = await page.screenshot({
    fullPage: true,
  });

  await waitFor();

  // Close the page
  await page.close();

  try {
    const result = expect(screenshot1).toMatchImageSnapshot({
      failureThreshold: 5,
      failureThresholdType: "percent",
    });
  } catch (error) {
    console.log(error);
  }

  try {
    const result = expect(screenshot2).toMatchImageSnapshot({
      failureThreshold: 5,
      failureThresholdType: "percent",
    });
  } catch (error) {
    console.log(error);
  }
}

it.each(validUrls)("It should match %s", test, 100000);
