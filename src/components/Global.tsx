import React from 'react'
import { Global } from '@emotion/core'
export default () => (
  <Global
    styles={theme => ({
      body: {
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
        margin: 0,
      },
      '.drawer-content': {
        background: theme.colors.primary,
      },
    })}
  />
)
