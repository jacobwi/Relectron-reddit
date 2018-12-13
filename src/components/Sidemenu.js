import React, { Component } from 'react'
import styled from '@emotion/styled'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Icons from "react-icons/fa";

const Pane = styled.div`
    width: 80px;
    background-color: #3e434d;
    height: 100%;
	position: fixed;
    grid-column: 1;
    border-bottom-right-radius: 20px;
`

const List = styled.ul`

    list-style: none;
    & li {
        font-size: 1.4em;
        margin-top: 60px;
        margin-left: -14px;
        &:hover {
            filter: brightness(140%);
            transition:all 0.3s linear;
            &:active {
                color: red;
            }    
        }
    }

`

const Item = styled(Link)`
    color: #e87910;
    &:hover {
        color: white;
        color: #e87910;
        cursor: pointer;
    }
`


const Footer = styled.ul`
    position: fixed;
    bottom: 0;
    margin-left: -14px;
    font-size: 1.4em;
    &:hover {
        filter: brightness(140%);
        transition:all 0.3s linear;
    }
`

export default class Sidemenu extends Component {
  render() {
      
    return (
      <Pane>
          <List>
              <li><Item to='/' className="icon"><Icons.FaHome/></Item></li>
              <li><Item to='/profile'  className="icon"><Icons.FaUser/></Item></li>
          </List>
          <Footer>
            <Item to='/settings'  className="icon"><Icons.FaToolbox/></Item>
          </Footer>
      </Pane>
    )
  }
}
