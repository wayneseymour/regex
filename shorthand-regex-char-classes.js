'use strict';

const str = `Aeiou $100 55.5%`;
const regex = /\w/g  //=> No spaces, symbols, nor unicode chars

/**
 * @param  String str
 * @param  RegExp regex
 * @param  HTMLElement target
 */
const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str =>
      `<span>${str}</span>`
    );
}
output(str, regex, document.querySelector('pre'));