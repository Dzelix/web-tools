import test from 'node:test';
import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

// test('first test', () => {
//   assert.strictEqual(1, 1);
// });


// test('first test', async (t) => {
//   await t.test('one', () => {
//     assert.strictEqual(1, 1);
//   })

//   await t.test('two', () => {
//     assert.strictEqual(1, 2);
//   })
// })

// test('first test', { skip: 'just skip it' }, () => {
//   assert.strictEqual(1, 1);
// });

// test('first test', (t) => {
//   t.skip('just skip it too');
// });

// describe('First describe', { skip: 'skip this describe' }, () => {
//   it('test one', () => {
//     assert.strictEqual(1, 1);
//   })
// })


// node --test-name-pattern="test 10" index.mjs
// test('test 10', () => {
//   assert.strictEqual(1, 1);
// })

// test('test 10', async (t) => {
//   t.test('one', () => {
//     assert.strictEqual(1, 1);
//   })
// })

// describe('test 10', () => {
//   it('one', () => {
//     assert.strictEqual(1, 1);
//   })

//   it('test 10', () => {
//     assert.strictEqual(1, 1);
//   })
// })

// test('a test that creates asynchronous activity', (t) => {
//   setImmediate(() => {
//     t.test('subtest that is created too late', (t) => {
//       throw new Error('error1');
//     });
//   });

//   setImmediate(() => {
//     throw new Error('error2');
//   });
// });
