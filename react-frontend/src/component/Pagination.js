import React, {useState, Fragment, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
    width: 17rem;
`

const Item = styled.div`
    flex: 0 0 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    cursor: pointer;
    border-radius: 50%;
    color: white;
    margin-right: 0.5rem;
`

const Current = styled.div`
    align-self: flex-end;
    & input {
        width: 2rem;
        text-align: center;
        outline: none;
        height: 2rem;
        border: none;
    }
`
const Window = styled.div`
    width: 16rem;
    overflow: hidden;
    border-radius: 2rem;
`

const Wrapper = styled.div`
    display: flex;
    transition: all 0.6s ease-in-out;
`

const range = (n) => [...Array(n).keys()]

// 调用父组件的handleSearch函数时需要重新初始化
export default function Pagination(props) {
    let [page, setPage] = useState(0);
    const totalPage = Math.ceil(props.total/10);
    console.log(totalPage);
    const styles = {
        active: {
            background: 'rgba(0,0,0,0.8)'
        },
        normal: {
            background: 'rgba(0,0,0,0.3)'
        }
    }
    
    useEffect(() => {
        setPage(0);
    }, [totalPage])

    const getPos = () => {
        if (page < 3) {
            return {
                transform: `translateX(0)`
            }
        }
        return {
            transform: `translateX(-${(page-3)*2.5}rem)`
        }
    }

    return (
        <Fragment>
            <Container>
                <Window>
                    <Wrapper style={getPos()}>
                        { range(totalPage).map((v, i) => 
                        <Item style={page === i ? styles.active : styles.normal} 
                            key={i} 
                            onClick={() => {props.getPage(i); setPage(i)}}
                        >
                            {i + 1}
                        </Item>) }
                    </Wrapper>
                </Window>
                <Current>
                    <input value={page + 1} 
                    onChange={(e) => {
                        if(!/^\d+$/.test(e.target.value)) {
                            setPage(0); 
                            return;
                        }
                        if (e.target.value < 1 || e.target.value > totalPage) return;
                        props.getPage(e.target.value - 1); 
                        setPage(e.target.value - 1);}}
                    onFocus={(e) => e.target.select()} 
                    />
                </Current>
            </Container>
            <div style={{'textAlign': 'center'}}>共{totalPage}页</div>
        </Fragment>
    )
}
