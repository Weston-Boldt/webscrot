'use strict';

const fs = require('fs');
const puppeteer = require('puppeteer');
const Url = require('url');

module.exports = {
    getUrlParts: function (reqUrl) {
        try {
            let urlParts = new Url.URL(reqUrl);
            return urlParts;
        }
        catch(e) {
            return false;
        }
    },

    takeScreenShot: function (url, options) {
        console.log("url = " + url);
        if (options === undefined) {
            options = {path: __dirname + '/webscrot_result.png'};
        }
        console.log(options.path);
        (async () => {
            const browser = await puppeteer.launch({/*dumpio: true*/});
            const page = await browser.newPage();
            await page.goto(url);
            await page.screenshot(options);

            await browser.close();
        })();
    }
}
