import { clampTrolls } from '../src/answer.js';

function assertEquals(actual, expected, msg = 'Did not pass test!') {
  if (actual !== expected)
    throw Error(`${msg}\nExpected: ${expected}\nActual: ${actual}`);
}
function test(n, limit, expected) {
  assertEquals(clampTrolls(n, limit), expected, `Input: ${n}, Limit: ${limit}`);
}

test('@@@@@@@', 4, '@@@@');
test(':):):):):)', 2, ':):)');
test('@@@@@ oke :):):):)', 3, '@@@ oke :):):)');
test(
  'menunggu dengan wajah tersenyum wajah tersenyum wajah tersenyum wajah tersenyum kamu',
  3,
  'menunggu dengan wajah tersenyum wajah tersenyum wajah tersenyum kamu'
);
test(
  '@@@@@@@@@@@ akeong akeong akeong !!!! akeong @@@@@@ wajah tersenyum wajah tersenyum wajah tersenyum ###',
  2,
  '@@ akeong akeong !! akeong @@ wajah tersenyum wajah tersenyum ##'
);
