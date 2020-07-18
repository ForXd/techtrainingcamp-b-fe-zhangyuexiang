import React from 'react';
import ResultItem from './ResultItem';
import styled from 'styled-components';
import Pagination from './Pagination';

const Container = styled.div`
    width: 50%;
    max-height: 80vh;
    overflow: hidden;
    position: relative;
    &::before {
        content: '';
        width: 20px;
        height: 80vh;
        background: white;
        position: absolute;
        right: 2rem;
    }
`
const Wrapper = styled.div`
    max-height: 70vh;
    margin: 0 2rem;
    overflow: auto;
`



export default function ResultList(props) {
    return (
        <Container>
            <Wrapper>
                {props.data.map((v, i) => <ResultItem item={v} key={i}></ResultItem>)}
            </Wrapper>
            {props.data.length ? <Pagination getPage={props.getPage} total={props.total}></Pagination> : null}
            
        </Container>
    )
}