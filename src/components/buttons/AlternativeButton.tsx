import React from 'react'
import { Triangle } from 'react-feather'
import { Button, Text } from '@theme-ui/components'

type Props = {
  action?: () => void
  label?: string
}
export default function AlternativeButton({
  action,
  label = 'Detalii',
}: Props) {
  return (
    <Button variant="alternative" onClick={action} style={{}}>
      <Triangle
        size={8}
        fill="black"
        strokeWidth={1}
        style={{
          transform: 'rotate(90deg)',
          margin: 'auto 10px',
        }}
      />
      <Text variant="details">{label}</Text>
    </Button>
  )
}
