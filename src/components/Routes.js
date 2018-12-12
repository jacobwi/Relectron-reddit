import React, { Component } from 'react'
import styled from '@emotion/styled'
import Home from './Home';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

const Main = styled.div`
    grid-column: 2;
    margin-top: 70px;
    overflow:auto;
`
export default class Routes extends Component {
  render() {
    return (
    <Main>
        <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="route-wrapper"
          >
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
        </AnimatedSwitch>
    </Main>
    )
  }
}
