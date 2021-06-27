import axios from "axios";
import express from "express";
import cheerio from "cheerio";
import fs from "fs";
import puppeteer from "puppeteer";

const udemy = async () => {
  const weChromeEndpoint =
    "ws://127.0.0.1:9222/devtools/browser/55458520-3b0c-418d-a643-d4590a11f0c6";

  const browser = await puppeteer.connect({
    browserWSEndpoint: weChromeEndpoint,
    slowMo: 20,
  });

  const sleep = async (ms) => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, ms);
    });
  };

  const fbPageClick = async (selector) => {
    try {
      await fbPage.click(selector);
    } catch (e) {
      console.log("error on fbPage.click, try fbPage.evaluate");
      await fbPage.evaluate((selector) => {
        const button = document.querySelector(selector);
        if (button) {
          button.click();
        } else {
          throw "no element found for click";
        }
      }, selector);
    }
  };

  const ID = {
    login: "#m_login_email", //m.facebook login email input
    pass: "#m_login_password", //m.facebook login password input
    loginButton:
      'button[data-sigil="touchable login_button_block m_login_button"]', //m.facebook login subbmit button
    groupComposer: '#MRoot div[role="button"]',
    groupComposerTextFiled:
      'textarea[data-sigil="composer-textarea m-textarea-input"]',
    groupSendPostBtn: 'button[data-sigil="submit_composer"]',
  };

  try {
    const fbPage = await browser.newPage();
    await fbPage.goto("https://www.facebook.com/groups/548558866554350", {
      waitUntil: "networkidle2",
      timeout: 0,
    });
    await sleep(3000);
    await fbPage.waitForSelector(ID.groupComposer);
    await fbPageClick(ID.groupComposer);
    await sleep(3000);
    await fbPage.waitForSelector(ID.groupComposerTextFiled);
    await fbPageClick(ID.groupComposerTextFiled);
    await fbPage.keyboard.type("Hello World" + " ");
    await sleep(10000);
    console.log("puppeteer gotoGroupAndPost typing contents success");
  } catch (e) {
    console.log(e);
  }
  // browser.close();
};

udemy();
