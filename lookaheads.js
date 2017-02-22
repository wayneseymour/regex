'use strict';

const str = `foo
foobar
foobaz
fooboo`

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

const qs = document.querySelector.bind(document)
const outStr = output.bind(null, str)

const data = [
  ['foo(?=bar|boo)', '.a'], // positive lookahead
  ['foo(?!bar|boo)', '.b']  // negative lookahead
]
  .forEach(xs =>
    outStr( new RegExp(xs[0], 'g'), qs(xs[1]) )
  )
