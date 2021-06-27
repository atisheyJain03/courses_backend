const axios = require("axios");
const Cheerio = require("cheerio");
const Puppeteer = require("puppeteer");

const Course = require("../models/courseModel");

const getLinksFromUnravest = async (url) => {
  const selector =
    "div.nv-content-wrap.entry-content > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-4ce0af2.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > div > div > ol > li > a";

  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  const values = await page.evaluate((selector) => {
    const val = [...document.querySelectorAll(selector)].map((val) => val.href);

    return val;
  }, selector);
  browser.close();
  return values;
};
// udemy(values);

const getDataFromUdemy = async (siteArr) => {
  try {
    const data = siteArr.map(async (val) => {
      const siteUrl = val;
      const res = await axios.get(siteUrl);

      const data = res.data;
      const $ = Cheerio.load(data);
      const TitleElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(4) > div > div.udlite-text-sm.clp-lead > div.clp-component-render > h1";

      const headingElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(4) > div > div.udlite-text-sm.clp-lead > div.clp-component-render > div";

      const imageElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__introduction-asset__main > div > div > div > div > div > button > span.intro-asset--img-aspect--1UbeZ > img";

      const title = $(TitleElem).text().trim();
      const heading = $(headingElem).text().trim();
      const image = $(imageElem).attr("src");
      return { title, heading, image, url: val };
    });
    return data;
  } catch (err) {
    console.log("🚀 ~ file: index.js ~ line 14 ~ getInfoUdemy ~ err", err);
  }
};

const udemy = async (siteArr) => {
  const browser = await Puppeteer.launch({ headless: false });

  try {
    const page = await browser.newPage();
    for (const link of siteArr) {
      console.log(
        "🚀 ~ file: index.js ~ line 22 ~ siteArr.forEach ~ link",
        link
      );
      try {
        await page.goto(link, { waitUntil: "load", timeout: 0 });
      } catch (e) {
        console.log(
          "🚀 ~ file: index.js ~ line 28 ~ awaitsiteArr.forEach ~ e",
          e
        );
      }

      const selector = {};
      const priceElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.sidebar-container-position-manager > div > div > div > div.course-landing-page_sidebar-container > div > div:nth-child(1) > div.sidebar-container--purchase-section--17KRp > div > div.generic-purchase-section--buy-box-main--siIXV > div > div:nth-child(2) > div > div";

      await page.waitForFunction(
        (priceElem) => document.querySelector(priceElem).innerText.length > 0,
        {},
        priceElem
      );

      selector.priceValElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__main-content.course-landing-page__purchase-section__main.dark-background-inner-text-container > div > div > div > div > div.generic-purchase-section--buy-box-main--siIXV > div > div:nth-child(2) > div > div > div.price-text--price-part--Tu6MH.udlite-clp-discount-price.udlite-heading-xxl > span:nth-child(2)";

      selector.TitleElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(4) > div > div.udlite-text-sm.clp-lead > div.clp-component-render > h1";

      selector.headingElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(4) > div > div.udlite-text-sm.clp-lead > div.clp-component-render > div";

      selector.imageElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__introduction-asset__main > div > div > div > div > div > button > span.intro-asset--img-aspect--1UbeZ > img";

      const values = await page.evaluate((selector) => {
        const val = {};
        val.price = document.querySelector(selector.priceValElem)
          ? document.querySelector(selector.priceValElem).innerText
          : "";
        val.title = document.querySelector(selector.TitleElem)
          ? document.querySelector(selector.TitleElem).innerText
          : "";
        val.heading = document.querySelector(selector.headingElem)
          ? document.querySelector(selector.headingElem).innerText
          : "";
        val.image = document.querySelector(selector.imageElem)
          ? document.querySelector(selector.imageElem).src
          : "";
        return val;
      }, selector);

      //   console.log({ values });
    }
  } catch (e) {
    console.log(e);
  }
  browser.close();
};

// getLinksFromUnravest("https://www.unravest.in/udemy-paid-courses-for-free/")
//   .then((res) => {
//     getDataFromUdemy(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// getLinksFromUnravest("https://www.unravest.in/udemy-paid-courses-for-free/")
//   .then((res) => {
//     // udemy(res);
//     getDataFromUdemy(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const scrapUsingCheerio = async (req, res) => {
  try {
    console.log(req.body);
    const linkArr = await getLinksFromUnravest(req.body.link);
    // console.log(
    //   "🚀 ~ file: scrapingController.js ~ line 157 ~ scrapUsingCheerio ~ linkArr",
    //   linkArr
    // );
    const courseData = await getDataFromUdemy(linkArr);

    Promise.all(courseData).then(async (results) => {
      console.log(
        "🚀 ~ file: scrapingController.js ~ line 150 ~ Promise.all ~ results",
        results
      );
      const dataArr = results.filter(
        (elem) => elem.title && elem.heading && elem.image && elem.url
      );
      const data = await Course.create(dataArr);
      res.status(200).json(data);
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: scrapingController.js ~ line 156 ~ scrapUsingCheerio ~ error",
      error
    );
    res.status(500).json({ error });
  }
};

const checkCourses = async (req, res) => {
  try {
    const pg = req.params.page;
    const skip = (pg - 1) * 30;
    // this.query = this.query.skip(skip).skip(skip).limit(20);
    const dataLinks = await Course.find({ status: "active" })
      .select("url")
      .skip(skip)
      .limit(20);

    const browser = await Puppeteer.launch({
      headless: false,
    });

    const retArray = [];

    const page = await browser.newPage();
    for (const link of dataLinks) {
      await page.goto(link.url, { waitUntil: "load", timeout: 0 });

      const selector = {};
      const priceElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.sidebar-container-position-manager > div > div > div > div.course-landing-page_sidebar-container > div > div:nth-child(1) > div.sidebar-container--purchase-section--17KRp > div > div.generic-purchase-section--buy-box-main--siIXV > div > div:nth-child(2) > div > div";

      await page.waitForFunction(
        (priceElem) => document.querySelector(priceElem).innerText.length > 0,
        {},
        priceElem
      );

      selector.priceValElem =
        "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__main-content.course-landing-page__purchase-section__main.dark-background-inner-text-container > div > div > div > div > div.generic-purchase-section--buy-box-main--siIXV > div > div:nth-child(2) > div > div > div.price-text--price-part--Tu6MH.udlite-clp-discount-price.udlite-heading-xxl > span:nth-child(2)";

      const values = await page.evaluate((selector) => {
        const val = {};
        val.price = document.querySelector(selector.priceValElem)
          ? document.querySelector(selector.priceValElem).innerText
          : "";
        return val;
      }, selector);

      if (values.price != "" && values.price != "Free") {
        console.log(link.url);

        const newC = await Course.findOneAndUpdate(
          { url: link.url },
          {
            status: "expired",
          },
          {
            new: true,
          }
        );
        retArray.push(newC);
      }
    }
    browser.close();
    res.status(200).json({ message: "done", retArray: retArray });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { checkCourses, scrapUsingCheerio };
