import React from 'react';
import ResultItem from './ResultItem';
import styled from 'styled-components';
import Pagination from './Pagination';

const Container = styled.div`
    width: 50%;
    max-height: 90vh;
    overflow: hidden;
    position: relative;
`
const Wrapper = styled.ul`
    list-style: none;
    max-height: 80vh;
    max-width: 50rem;
    margin: 0 auto;
    overflow: auto;
    padding: 0;
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