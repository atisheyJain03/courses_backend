import axios from "axios";
import express from "express";
import cheerio from "cheerio";
import fs from "fs";
import puppeteer from "puppeteer";

const udemy = async (siteArr) => {
  const browser = await puppeteer.launch({ headless: false });

  //   let siteArr = [
  //     "https://www.udemy.com/course/developing-a-multithreaded-kernel-from-scratch/",
  //     "https://www.udemy.com/course/programming-games-for-the-atari-2600/",
  //     "https://www.udemy.com/course/design-a-cpu/",
  //     "https://www.udemy.com/course/x86-64-bit-assembly-language-step-by-step-tutorial/",
  //     "https://www.udemy.com/course/2021-learn-carnatic-flute-intermediate-level-varnams/?couponCode=VARNAMS1",
  //   ];

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
        val.title = document.querySelector(selector.TitleElem).innerText;
        val.heading = document.querySelector(selector.headingElem).innerText;
        val.image = document.querySelector(selector.imageElem).src;
        return val;
      }, selector);

      console.log({ values });
    }
  } catch (e) {
    console.log(e);
  }
  browser.close();
};

const unrev = async () => {
  const selector =
    "div.nv-content-wrap.entry-content > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-4ce0af2.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > div > div > ol > li > a";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.unravest.in/udemy-paid-courses-for-free/");
  const values = await page.evaluate((selector) => {
    const val = [...document.querySelectorAll(selector)].map((val) => val.href);

    return val;
  }, selector);
  browser.close();
  //   console.log(values);
  udemy(values);
};
unrev();
