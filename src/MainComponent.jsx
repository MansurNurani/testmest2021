import React, { Component } from 'react'
import SubComponent from './SubComponent'

export default class MainComponent extends Component {
    render() {
        return (
            <div>
                سلام کامپونتها:
                <SubComponent />
                <SubComponent />
                <SubComponent />
                <SubComponent />
                <SubComponent />
            </div>
        )
    }
}
