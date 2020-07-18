import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background:#bdc3c7;
    display: flex;
    width: 18rem;
    margin: 1rem auto;
    position: relative;
    padding: 0.5rem;
    border-radius: 1rem;
    & input {
        width:12rem;
        outline: none;
        border: none;
        margin-left: 1rem;
        background:#bdc3c7;
    }
`

const SearchIcon = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border:2px solid;
    position: absolute;
    margin:30px auto;
    right: 1rem;
    top: -22px;
    cursor: pointer;
    &::before {
        content: '';
        content: "";
        transform: rotate(45deg);
        width:8px;
        height: 2px;
        position: absolute;
        top:13px;
        left:11px;
        background-color: black;
    }
`
export default function Search(props) {
    
    return (
        <Container>
            <input 
                onChange={(e) => {props.handleChange(e.target.value)}}
                value={props.searchVal} ></input>
            <SearchIcon onClick={ props.handleSearch }></SearchIcon>
        </Container>
        
    )
}