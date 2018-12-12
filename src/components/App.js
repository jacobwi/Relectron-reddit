import '../assets/css/App.css';
import React, { Component } from 'react';
import Header from './Header'
import Sidemenu from './Sidemenu'
import styled from '@emotion/styled'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from './Routes';

const Main = styled.div`
    -webkit-app-region: drag;
`

const Container = styled.div`
    display: grid;
    grid-column-gap: 50px;
    grid-template-columns: 10% auto 20%;
    
`

class App extends React.Component {
  render() {
    return (
      <Main>
        <Header />

          <Router>
            
          <Container>
            <Sidemenu />
            <Routes />
            </Container>
          </Router>


      </Main>
    );
  }
}

export default App;
