// ==UserScript==
// @name         Plain Text Sports Refresher
// @namespace    https://codeberg.org/shmup/junk-trove
// @version      1.0
// @description  Redirect plaintextsports
// @author       shmup
// @match        https://plaintextsports.com/#nfl
// @grant        none
// @run-at       document-start
// @license      Unlicense
// ==/UserScript==

(function () {
  // please refresh this browser tab every uh, 5 seconds
  setTimeout(function(){
    location.reload();
  }, 5000);
})();
