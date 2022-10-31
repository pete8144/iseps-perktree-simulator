const numberFormat = Intl.NumberFormat(navigator.language || 'en', {
  maximumFractionDigits: 2,
})

export const formatDecimal = (value: number) => numberFormat.format(value)

export const formatNumber = (value: number) => {
  let suffix = ''
  let v = value

  if (v >= 1e6) {
    v /= 1e6
    suffix = 'm'
  } else if (v >= 1e3) {
    v /= 1e3
    suffix = 'k'
  }

  return formatDecimal(v) + suffix
}

export const formatPercent = (percent: number) => `+${formatNumber(percent)}%`
