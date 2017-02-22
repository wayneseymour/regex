'use strict';

var str = `cat mat bat Hat ?at 0at !at .at *at`;
var regex = /[a-zA-Z0-9?!.*]at/g  // characer class range UNION (a thru z and A thru Z)

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
