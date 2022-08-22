// ==UserScript==
// @name         Discworld MUD Board Navigation
// @namespace    https://codeberg.org/shmup/junk-trove
// @version      1.0
// @description  Adds next/previous key bindings to boards
// @author       shmup
// @match        https://discworld.starturtle.net/lpc/secure/boards.c?board=*
// @grant        none
// @run-at       document-start
// ==/UserScript==

// https://www.tampermonkey.net/documentation.php

/**
 * Navigate with left/right arrow, or h/l
 */

(function () {
  window.addEventListener(
    "keydown",
    ({ key }) => {
      const links = [...document.querySelector(".boardnav").childNodes]
        .filter(
          (n) =>
            n.nodeName === "A" &&
            (n.innerText === "Next" || n.innerText === "Previous")
        )
        .reduce((acc, n) => {
          acc[n.innerText.toLowerCase()] = n;
          return acc;
        }, {});

      if (key === "h" || key === "ArrowLeft") {
        if (links.previous) {
          links.previous.click();
        }
      } else if (key === "l" || key === "ArrowRight") {
        links.next.click();
      }
    },
    true
  );
})();
