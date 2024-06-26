import { hasGoalFilter } from "../../util/filters"
import numberFormatter from "../../util/number-formatter"
import React from "react"

/*global BUILD_EXTRA*/
/*global require*/
function maybeRequire() {
  if (BUILD_EXTRA) {
    return require('../../extra/money')
  } else {
    return { default: null }
  }
}

const Money = maybeRequire().default

export const VISITORS_METRIC = {
  name: 'visitors',
  label: 'Visitors',
  realtimeLabel: 'Current visitors',
  goalFilterLabel: 'Conversions',
  plot: true
}
export const PERCENTAGE_METRIC = { name: 'percentage', label: '%' }
export const CR_METRIC = { name: 'conversion_rate', label: 'CR' }

export function maybeWithCR(metrics, query) {
  if (metrics.includes(PERCENTAGE_METRIC) && hasGoalFilter(query)) {
    return metrics.filter((m) => { return m !== PERCENTAGE_METRIC }).concat([CR_METRIC])
  }
  else if (hasGoalFilter(query)) {
    return metrics.concat(CR_METRIC)
  }
  else {
    return metrics
  }
}

export function displayMetricValue(value, metric) {
  if (['total_revenue', 'average_revenue'].includes(metric.name)) {
    return <Money formatted={value} />
  } else if (metric === PERCENTAGE_METRIC) {
    return value
  } else if (metric === CR_METRIC) {
    return `${value}%`
  } else {
    return <span tooltip={value}>{numberFormatter(value)}</span>
  }
}

export function metricLabelFor(metric, query) {
  if (metric.realtimeLabel && query.period === 'realtime') { return metric.realtimeLabel }
  if (metric.goalFilterLabel && hasGoalFilter(query)) { return metric.goalFilterLabel }
  return metric.label
}
