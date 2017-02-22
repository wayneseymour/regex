'use strict';

var str = `cat mat bat Hat ?at 0at`;
var regex = /[^cb]at/g  // everything except cat and bat; negated captures that start with 'c' or 'b'

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
