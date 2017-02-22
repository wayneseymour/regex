'use strict';

const str = `800-456-7890
(555) 456-7890
4564567890`

const regex = /\(?(?:\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g // Opting out of reference capturing in the
// capture group; makes the regex run faster, using (?: 

console.log(str.replace(regex, 'area code: $1')) // Reference to the capture group `$`,
// and a numeric index of our capture groups (1 based, not zero based).

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
