import React from 'react';
import KeywordItem from './KeywordItem';
import styled from 'styled-components';

const Container = styled.div`
    width: 50%;
    max-height: 80vh;    
    margin: 1.5rem 0;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: -2rem;
        left: calc(50% - 1rem);
        border: 1rem solid;
        border-color: transparent  transparent #ccc transparent;
    }
    transition: all 0.6s ease;
`
const Wrapper = styled.div`
    max-height: 80vh;
    margin: 0 2rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    overflow: auto;
    & h3 {
        text-align: center;
    }
`


export default function KeywordList(props) {
    const handleClick = (val)=> {
        props.setSearchVal(val, () => {
            props.handleSearch();
        });
        props.setShowKeyword(false);        
    }

    const list = props.keywordList.map((v, i) => <KeywordItem keyword={v.keyword} id={i} handleClick={handleClick} key={i}></KeywordItem>)
    return (
        <Container>

            <Wrapper>
                <h3> { props.header } </h3>
                
                { list }
            </Wrapper>
        </Container>
    )

}
