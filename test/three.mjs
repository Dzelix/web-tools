import { describe, it, test } from 'node:test';
import { strict as assert } from 'node:assert';

describe('Unit three: group one', () => {
  it('test one', () => {
    assert.strictEqual(1, 1);
  })
})

test('Unit three: test two', { skip: true }, () => {
  assert.strictEqual(1, 1);
})

describe.skip('Unit three: group three', () => {
  it('test one', () => {
    assert.strictEqual(1, 1);
  })
})

test('Unit three: test three', () => {
  assert.strictEqual(1, 1);
})
