import axios from "axios";
import express from "express";
import cheerio from "cheerio";
import fs from "fs";
import puppeteer from "puppeteer";

const udemy = async () => {
  const browser = await puppeteer.launch({ headless: false });

  let siteArr = ["https://www.tutorialbar.com/"];

  try {
    const page = await browser.newPage();
    for (const link of siteArr) {
      console.log(
        "🚀 ~ file: index.js ~ line 22 ~ siteArr.forEach ~ link",
        link
      );
      await page.goto(link, { waitUntil: "load", timeout: 0 });

      await page.waitForSelector(
        "#rh_clmgrid_1297241533 > article > div.content_constructor.pb0.pr20.pl20.mobilepadding > h3 > a"
      );
      // await page.click(
      //   "#rh_clmgrid_1297241533 > article > div.content_constructor.pb0.pr20.pl20.mobilepadding > h3 > a"
      // );

      let elem = await page.evaluate(() => {
        let elements = document.querySelectorAll(
          "#rh_clmgrid_1297241533 > article > div.content_constructor.pb0.pr20.pl20.mobilepadding > h3 > a"
        ).href;

        return elements;
      });
      let myArray = [];
      console.log("🚀 ~ file: index.js ~ line 36 ~ udemy ~ myArray", myArray);
      console.log("🚀 ~ file: index.js ~ line 37 ~ udemy ~ elem", elem);

      for (let element of myArray) {
        await element.click();
        const btn =
          "body > div.rh-outer-wrap > div.rh-container > div > div > div > div.single_custom_bottom.mt10.mb10.margincenter.text-center.clearbox > div > div > div > span > a";

        await page.waitForSelector(btn);
        const values = await page.evaluate((btn) => {
          const val = {};
          val.link = document.querySelector(btn)
            ? document.querySelector(btn).href
            : "";

          return val;
        }, btn);
        console.log("🚀 ~ file: index.js ~ line 46 ~ values ~ values", values);
      }

      // const btn =
      //   "body > div.rh-outer-wrap > div.rh-container > div > div > div > div.single_custom_bottom.mt10.mb10.margincenter.text-center.clearbox > div > div > div > span > a";

      // await page.waitForSelector(btn);

      // const values = await page.evaluate((btn) => {
      //   const val = {};
      //   val.link = document.querySelector(btn)
      //     ? document.querySelector(btn).href
      //     : "";

      //   return val;
      // }, btn);
      // console.log("🚀 ~ file: index.js ~ line 46 ~ values ~ values", values);

      // const selector = {};
      // const priceElem =
      //   "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.sidebar-container-position-manager > div > div > div > div.course-landing-page_sidebar-container > div > div:nth-child(1) > div.sidebar-container--purchase-section--17KRp > div > div.generic-purchase-section--buy-box-main--siIXV > div > div:nth-child(2) > div > div";

      // await page.waitForFunction(
      //   (priceElem) => document.querySelector(priceElem).innerText.length > 0,
      //   {},
      //   priceElem
      // );

      // selector.priceValElem =
      //   "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__main-content.course-landing-page__purchase-section__main.dark-background-inner-text-container > div > div > div > div > div.generic-purchase-section--buy-box-main--siIXV > div > div:nth-child(2) > div > div > div.price-text--price-part--Tu6MH.udlite-clp-discount-price.udlite-heading-xxl > span:nth-child(2)";

      // selector.TitleElem =
      //   "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(4) > div > div.udlite-text-sm.clp-lead > div.clp-component-render > h1";

      // selector.headingElem =
      //   "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(4) > div > div.udlite-text-sm.clp-lead > div.clp-component-render > div";

      // selector.imageElem =
      //   "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__introduction-asset__main > div > div > div > div > div > button > span.intro-asset--img-aspect--1UbeZ > img";

      // const values = await page.evaluate((selector) => {
      //   const val = {};
      //   val.price = document.querySelector(selector.priceValElem)
      //     ? document.querySelector(selector.priceValElem).innerText
      //     : "";
      //   val.title = document.querySelector(selector.TitleElem).innerText;
      //   val.heading = document.querySelector(selector.headingElem).innerText;
      //   val.image = document.querySelector(selector.imageElem).src;
      //   return val;
      // }, selector);

      // console.log({ values });
    }
  } catch (e) {
    console.log(e);
  }
  // browser.close();
};

udemy();
