import { describe, it, test } from 'node:test';
import { strict as assert } from 'node:assert';

describe('Unit two: group one', () => {
  it('test one', () => {
    assert.strictEqual(1, 1);
  })
})

test('Unit two: test two', () => {
  assert.strictEqual(1, 1);
})
