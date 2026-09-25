export function total(items, discountPct = 0) {
  const gross = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  return gross - gross * discountPct
}
