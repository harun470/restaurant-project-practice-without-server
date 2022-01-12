import React, { Component } from 'react'
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import {Route,Switch} from 'react-router-dom'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Menu' component={Menu} />
                    <Route path='/Contact' component={Contact} />
                </Switch>
                
            </div>
        )
    }
}
