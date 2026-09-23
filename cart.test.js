import { test } from 'node:test'
import assert from 'node:assert/strict'
import { total } from './cart.js'

test('sums price times quantity', () => {
  assert.equal(total([{ price: 2, qty: 3 }, { price: 1, qty: 1 }]), 7)
})
test('empty cart is zero', () => {
  assert.equal(total([]), 0)
})
