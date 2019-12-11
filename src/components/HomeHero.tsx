/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Card, Text, Heading, Image } from '@theme-ui/components'
import { DetailsButton } from '../components/buttons'
import { Search } from '../components/Search'

export function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query heroQuery {
          file(relativePath: { regex: "/hero.png/" }) {
            childImageSharp {
              fluid(maxWidth: 1200, traceSVG: { color: "rgb(81, 118, 172)", threshold: 50 }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        const test = () => console.log('click')
        return (
          <Card variant="primary">
            <div sx={{ backgroundColor: 'primary', height: '100%', mb: 4, display: 'block' }} />
            <Heading as="h1">Îngrijim și suntem îngrijiți mai bine</Heading>
            <Text variant="body">
              ...când ne cunoaștem drepturile, modalitățile de acces la servicii și localizarea acestoras.
            </Text>
            <DetailsButton action={test} sx={{ my: 3 }} />
            <Img fluid={data.file.childImageSharp.fluid} alt="" sx={{ height: ['390px', '500px'], mx: '-20px' }} />
            <Search />
          </Card>
        )
      }}
    />
  )
}
