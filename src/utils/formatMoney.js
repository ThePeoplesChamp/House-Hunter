const formatter = Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
})

export default function formatMoney(price) {
  return formatter.format(price)
}
