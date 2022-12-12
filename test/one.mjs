import { describe, it, test } from 'node:test';
import { strict as assert } from 'node:assert';

describe('Unit one: group one', { skip: true }, () => {
  it('test one', () => {
    assert.strictEqual(1, 10);
  })
})

describe.skip('Unit one: group two', () => {
  it('test two', () => {
    assert.strictEqual(1, 10);
  })
})

test('Unit one: test three', { skip: true }, () => {
  assert.strictEqual(1, 10);
})
