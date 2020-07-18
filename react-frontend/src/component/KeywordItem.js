import React from 'react';
import styled from 'styled-components';
import './animate.css';

const Item = styled.li`
    margin: 1rem;
    cursor: pointer;
    transform: translateX(-110%);
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 3px #ccc;
    list-style: none;
    animation: leftIn 0.6s forwards;
    &:hover {
        background: #efefef;
    }
`

const getDelay = (id) => {
    return {
        animationDelay: `${id*0.1}s`
    }
}

export default function KeywordItem(props) {
    return (
        <Item style={getDelay(props.id)}
            onClick={() => props.handleClick(props.keyword)}>
            { props.keyword }
        </Item>
    )
}