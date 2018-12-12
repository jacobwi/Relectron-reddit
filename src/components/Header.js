import React, { Component } from 'react'
import styled from '@emotion/styled'

const Bar = styled.div`
    width: 100%;
    height: 40px;
    background-color: #3f434a;
    grid-row: 1;
    column-span: 2;
    -webkit-box-shadow: 3px 3px 1px 6px #3f434a;
    -moz-box-shadow:    3px 3px 1px 6px #3f434a;  
    box-shadow:         3px 3px 1px 6px #3f434a; 
    position: fixed;
    z-index: 2;
`
const Buttons = styled.div`
    z-index: 2;
`

const CloseButton = styled.div`
    background: #ff5c5c;
    font-size: 9pt;
    width: 11px;
    height: 11px;
    border: 1px solid #e33e41;
    border-radius: 50%;
    display: inline-block;
    margin: 10px 0 0 10px;
    &:hover {
        -webkit-filter: brightness(120%);
        filter: brightness(120%);
    }
`
const MinimizeButton = styled.div`
    background: yellow;
    font-size: 9pt;
    width: 11px;
    height: 11px;
    border: 1px solid yellow;
    border-radius: 50%;
    display: inline-block;
    margin: 10px 0 0 10px;
    &:hover {
        -webkit-filter: brightness(120%);
        filter: brightness(120%);
    }
`

export default class Header extends Component {
    closeButton() {
        window.close();
    }
  render() {
    return (
      <Bar>
        <Buttons>
            <CloseButton onClick={this.closeButton}/>
            <MinimizeButton />
        </Buttons>
      </Bar>
    )
  }
}
