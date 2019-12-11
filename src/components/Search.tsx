/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { Input } from '@theme-ui/components'
export function Search() {
  return (
    <div sx={{ marginTop: -7, marginBottom: 7, position: 'relative', zIndex: 99 }}>
      <Input variant="input.search" placeholder="Caută serviciu, zonă sau tipologie beneficiar" />
    </div>
  )
}
