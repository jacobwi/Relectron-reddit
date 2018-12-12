import React from 'react'
import styled from '@emotion/styled';
import Axios from 'axios';
import Default from '../assets/img/default.png'
import * as Icons from "react-icons/fa";

const Main = styled.div`
    color: whitesmoke;
    
`

const Posts = styled.ul`
    list-style: none;

    & li {
        margin-top: 10px;
        background-color: #3e434d;
        padding: 20px;
        border-radius: 20px;
        display: grid;
        grid-template-columns: 10% 90%;
        grid-template-rows: 50px 19px;
        &:hover {
            filter: none;
            transition:all 0.3s linear;
            transform: translateY(1.3px);
            & img {
                filter: brightness(140%);
            }
        }
        & img {
            grid-column-start: 1;
            grid-row-start: 1;
            width: 64px;
            height: 64px;
            border-radius: 40px;
            &:hover {
                filter: brightness(140%);
                transition:all 0.3s linear;
            }
        }

    }
`

const Title = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
    margin-top: 10px;
    margin-left: 40px;

    &:hover {
        cursor: pointer;
        color: #e87910;
    }
`

const IconsSection = styled.div`
    grid-column-start: 2;
    margin-left: 500px;
    font-size: 0.8em;


    & .icon {
        margin-left: 20px;
        &:hover {
            color: #e87910;
            cursor: pointer;
        }
    }
`

export default class Home extends React.Component {
    constructor(){
        super();
        this.state ={
            posts: []
      };
    }
    componentDidMount() {

        Axios.get("https://reddit.com/r/aww.json")
          .then(response => {
            this.setState({
              posts: response.data.data.children
            })
          })
          .catch(error => {
            console.log(error);
          })
    }
  render() {
    return (
        <Main>
        <Posts className="list-group list-group-flush">
          {this.state.posts.map(post =>
          <li key={post.data.id} onClick={() => this.showImage(post.data.preview.images[0].source.url)}>
            {(post.data.thumbnail != "self") && <img src={post.data.thumbnail} alt="thumb" className="thumbnail" />}
            {(post.data.thumbnail == "self") && <img src={Default} alt="thumb" className="thumbnail" />}
            <Title>{post.data.title}</Title>
            <IconsSection>
                <Icons.FaShareAlt className='icon'/>
                <Icons.FaStar className='icon'/>
            </IconsSection>
          </li>
          )}
        </Posts>
      </Main>
    )
  }
}
