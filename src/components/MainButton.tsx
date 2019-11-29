import React from 'react'
import { ArrowRight } from 'react-feather'
import { Button, Text } from '@theme-ui/components'

type Props = {
  action: () => void
  label: string
}
export default function MainButton({ action, label }: Props) {
  return (
    <Button variant="secondary" onClick={action}>
      <Text variant="button">{label}</Text>
      <ArrowRight
        size={29}
        strokeWidth={1.5}
        style={{ position: 'absolute', right: 10, top: 10 }}
      />
    </Button>
  )
}
