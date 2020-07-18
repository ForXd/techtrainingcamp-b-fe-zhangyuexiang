import React, {Fragment} from 'react';
import KeywordList from './component/KeywordList';
import { cacheQuery, debounce } from './util/util';
import Search from './component/Search';
import ResultList from './component/ResultList';
import styled from 'styled-components';

const PREFIX = 'http://127.0.0.1:8000';

const styles = {
  showKeyword: {
    transform: 'translateX(0)',
  },
  showResult: {
    transform: 'translateX(-50%)'
  }
}

const Container = styled.div`width: 100%; overflow:hidden;`;
const Wrapper = styled.div`display: flex; width: 200%; transition: all 0.6s ease-in-out;height: 80vh;`

let ws = new WebSocket('ws://localhost:3001');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywordList: [],
            searchVal: '',
            result: {},
            showKeyword: false,
            getPage: null,
            hotList: []
        }
        this.debounceSearchKeyword = debounce((option) => {
            console.log('send ws');
            ws.send(JSON.stringify(option.data), (err) => {
                console.log(err);
            });
            cacheQuery(option)
            .then(res => {
                res = JSON.parse(res);
                console.log(res);
                this.setState({
                    keywordList: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
        }, 1);
        ws.onmessage = (message) => {
            console.log('receive: ' + message);
            let list = JSON.parse(message.data);
            this.setState({hotList: list});
        }
    }
    setSearchVal = (val, cb) =>{
        this.setState({searchVal: val}, cb);
        
    }

    setShowKeyword = (val) =>{
        this.setState({showKeyword: val});
    }


    handleChange = (val) =>{
        this.setState({
            searchVal: val,
            showKeyword: true
        })

        if (val === '') return;
        console.log('hint: ', val);
        let option = {
            url:PREFIX + '/sug', 
            data: {keyword:val}
        }
        this.debounceSearchKeyword(option);
    }

    search= (keyword) => (offset=0) =>{
        cacheQuery({
            url:PREFIX + '/study', 
            data: {keyword, offset}
        })
        .then(res => {
            res = JSON.parse(res);
            console.log(res);
            this.setState({
                searchVal: '',
                result: res,
                showKeyword: false
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    handleSearch = () => {
        console.log('search : ', this.state.searchVal);
        this.search(this.state.searchVal)();
        // curry function
        this.setState({getPage: this.search(this.state.searchVal)});
    }
    render() {
        return (
            <Fragment>
                <Search 
                searchVal={this.state.searchVal}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                ></Search>
                <Container>
                  <Wrapper style={this.state.showKeyword ? styles.showKeyword : styles.showResult}>
                      {
                      this.state.searchVal === '' 

                      ? 

                        <KeywordList 
                            header={'热门搜索'}
                            keywordList={this.state.hotList} 
                            show={this.state.showKeyword} 
                            setSearchVal={this.setSearchVal}
                            setShowKeyword={this.setShowKeyword}
                            handleSearch={this.handleSearch}>
                        </KeywordList>

                      :
                        <KeywordList 
                            header={'相关搜索'}
                            keywordList={this.state.keywordList} 
                            show={this.state.showKeyword} 
                            setSearchVal={this.setSearchVal}
                            setShowKeyword={this.setShowKeyword}
                            handleSearch={this.handleSearch}>
                        </KeywordList>
                      }
                    
                    <ResultList 
                        data={this.state.result.data || []} 
                        getPage={this.state.getPage} 
                        total={this.state.result.total || 0}>
                    </ResultList>
                  </Wrapper>
                </Container>
            </Fragment>
        )
    }
}
export default App;
