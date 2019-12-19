/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import React from 'react'
import {jsx} from '@emotion/core'
import '../assets/theme/src/style.sass'


type Props = {
    children?: React.ReactNode
    left?: React.ReactNode
    right?: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {

    const contentColumns = () => {
        if(props.left && props.right) {
            return '3columns'
        } else if (props.left && !props.right) {
            return '2coluns-left'
        } else if (!props.left && props.right) {
            return '2coluns-right'
        } else {
            return '1column'
        }
    };

    return (
        <main className={contentColumns()}>
            {props.left && <div className="sidebar-left">{props.left}</div>}
            <div className="main">{props.children}</div>
            {props.right && <div className="sidebar-right">{props.right}</div>}
        </main>
    )
};

export default Layout;
