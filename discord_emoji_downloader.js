/**
 * Dumb little script that will print out a stack of curl commands
 * for each emoji it can see in the emoji pane. AKA, open the pane,
 * get to a spot you wanna yoink, and run this in your dev console.
 *
 */

window.emojiLog = [];
[...document.querySelectorAll("[class*=emojiItem] img")].reduce((acc, emoji) => {
  const ext = emoji.src.split(".").slice(-1)[0].split('?')[0];
  let name = emoji.alt.replaceAll(':', '').replaceAll('~', '');

  if (emojiLog.includes(name)) {
    let num = 1;
    while (emojiLog.includes(name)) {
      name += num;
      num += 1;
    }
  }

  emojiLog.push(name);

  acc += `curl -o ${name}.${ext} ${emoji.src}\n`;

  return acc;
}, "");

// mogrify -format png *.webp && rm *.webp
