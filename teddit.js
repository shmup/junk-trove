// ==UserScript==
// @name         Reddit to Teddit Redirector
// @namespace    https://codeberg.org/shmup/junk-trove
// @version      1.0
// @description  Redirect reddit to teddit, a free and open source alternative focused on privacy. Use with something like https://violentmonkey.github.io
// @author       shmup
// @match        https://www.reddit.com/*
// @match        https://reddit.com/*
// @match        https://old.reddit.com/*
// @grant        none
// @run-at       document-start
// @license      Unlicense
// ==/UserScript==

/**
 * Teddit is a free and open source alternative Reddit front-end focused on
 * privacy. Teddit doesn't require you to have JavaScript enabled in your browser.
 * The source is available on Codeberg at https://codeberg.org/teddit/teddit.
 **/

(function () {
  top.location.hostname = "teddit.net";
})();

