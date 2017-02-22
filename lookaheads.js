'use strict';

const str = `foo
foobar
foobaz
fooboo`
const regex = /foo(?!bar|boo)/g // foo not followed by
// bar, nor boo

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
