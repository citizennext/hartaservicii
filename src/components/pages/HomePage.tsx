/** @jsx jsx */
import React from 'react'
import {jsx} from '@emotion/core'
import Header from '../Header'
import Footer from '../Footer'
import HomePageContent from './HomePage/Content'

export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <HomePageContent/>
                <Footer/>
            </>
        );
    }
}
