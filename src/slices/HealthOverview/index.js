/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import Slice from '../Slice'
import Saving from '../Saving/Saving'
import RefundTimeline from './RefundTimeline'

export default function HealthDashboard({ title, actions, children }) {
  return (
    <Slice title={title} actions={actions}>
      {React.Children.map(children, child => (
        <div css={{ marginBottom: 40 }}>{child}</div>
      ))}
    </Slice>
  )
}

HealthDashboard.propTypes = {
  title: Slice.propTypes.title,
  actions: Slice.propTypes.actions,
}

HealthDashboard.Expenses = Saving
HealthDashboard.Refunds = RefundTimeline
