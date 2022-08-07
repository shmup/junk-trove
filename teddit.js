// ==UserScript==
// @name         Teddit Redirector
// @namespace    https://codeberg.org/shmup/junk-trove
// @version      1.0
// @description  Redirect reddit to teddit
// @author       shmup
// @match        https://www.reddit.com/*
// @match        https://reddit.com/*
// @match        https://old.reddit.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

// https://www.tampermonkey.net/documentation.php

(function () {
  top.location.hostname = "teddit.net";
})();
