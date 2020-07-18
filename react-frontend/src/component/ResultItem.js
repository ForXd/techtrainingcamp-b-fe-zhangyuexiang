import React from 'react';
import styled from 'styled-components';
import { timeFormat } from '../util/util';

const Item = styled.div`
    margin: 1rem;
    border-bottom: 1px solid #ccc;
    padding: 2rem;
`
const Tags = styled.div`
    display: flex;
    & div {
        padding: 0.1rem;
        position: relative;
        background: #64a9d640;
        margin:0 1rem;
    }
    & div::before {
        content: '';
        border: 0.7rem solid;
        right: -1.4rem;
        position: absolute;
        border-color: transparent transparent transparent #64a9d640;
    }
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function ResultItem(props) {
    return (
        <Item>
            <h2>
                {props.item.title}
            </h2>
            <Tags>
                {props.item.tags.map((v, i) => <div key={i}>{v}</div>)}
            </Tags>
            <p>
                {props.item.description}
            </p>
            <Bottom>
                <div>{'作者: ' + props.item.user_name}</div>
                <div>{'评论数: ' + props.item.comments_count}</div>
                <div>{'发表于: ' + timeFormat(props.item.create_time)}</div>
                <a href={props.item.link_url}>阅读原文</a>
            </Bottom>
        </Item>
    )
}