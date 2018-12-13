import React from 'react'
import styled from '@emotion/styled';
import Axios from 'axios';
import Default from '../assets/img/default.png'
import * as Icons from "react-icons/fa";
import * as Icon from '@material-ui/icons'

const Main = styled.div`
    color: whitesmoke;
    overflow-x: hidden;
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
const SearchBox = styled.div`
    overflow-x: hidden;
    width: 100%;
    margin-left: 40px;
    & .icon {
        position: relative;
        left: 30px;
        top: 12px;
        padding: 0.2rem;
        margin-top: 1px;
        background-color: #e87910;
        border-radius: 100px;
        z-index: 1;
        &:hover {
            -webkit-filter: brightness(140%);
        }
    }
    & input {
        outline: 0;
        opacity: 0.6;
        background-color: gray;
        border-color: gray;
        color: #e87910;
        text-align: left;
        border-radius: 6rem;
        font-size: 12px;
        border: 1px solid rgb(160, 160, 160);
        padding: .4rem 2rem .5rem 3rem;
        width: 6rem;
        font-family: 'roboto';
        transition: .5s;
        &:focus { 
            opacity: 1;
            border-color: #e87910;
        }
        &::placeholder {
            color: white;
            font-style: italic;
        }
    }
    
`

const NotFound = styled.div`
    position: absolute;
    left: 50%;
    bottom: 50%;
    & p {
        font-size: 30px;
        font-style: italic;
        color: gray;
    }
`

const Container = styled.div`

`
export default class Home extends React.Component {
    constructor(){
        super();
        this.state ={
            posts: [],
            search: "aww",
            found: false
      };
      this.searchRedditChange = this.searchRedditChange.bind(this);
    }
    componentDidMount() {
        this.fetchApi()
    }

    fetchApi() {
        Axios.get("https://reddit.com/r/" + this.state.search + ".json")
        .then(response => {
          this.setState({
            posts: response.data.data.children,
            found: true
          })
        })
        .catch(error => {
            this.setState({
                found: false
            })
        })
    }

    searchRedditChange(event) {
        this.setState({search: (event.target.value).trim()}, this.fetchApi); 
    }

    render() {
        return (
            <Main>
                <SearchBox>
                    <Container>
                        <Icon.Search className="icon"/>
                        <input type="text" placeholder="Search" onChange={this.searchRedditChange} />
                    </Container>
                </SearchBox>
                {this.state.found && <Posts className="list-group list-group-flush">
            {this.state.posts.map(post =>
            <li key={post.data.id} >
                {(post.data.thumbnail !== "self" && !post.data.thumbnail < 1) ? <img src={post.data.thumbnail} alt="thumb" className="thumbnail"/> :
                (post.data.thumbnail == "self") && <img src={Default} alt="thumb" className="thumbnail"/>}
                <Title>{post.data.title}</Title>
                <IconsSection>
                    <Icons.FaShareAlt className='icon'/>
                    <Icons.FaStar className='icon'/>
                </IconsSection>
            </li>
            )}
            </Posts>}

            {!this.state.found &&
                <NotFound>
                    <p>Not found</p>
                </NotFound>
            }
        </Main>
        )
    }
}
