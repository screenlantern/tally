import React, { Component } from 'react';
import { getList } from '../../api';
import Card from '../card/Card';
import Button from '../button/Button';

import './List.scss';

export default
class List extends Component {
    constructor(props){
        super(props)

        this.state = {
            listData: null
        };
    }

    componentDidMount() {
        getList(9).then(data => {
            //console.log(data);
            this.setState({
                listData: data.results
            })
        })
    }

    loadMore(e){
        e.preventDefault();
        const cache = this.state.listData;
        if(cache.length > 0){
            getList(3).then(data => {
                this.setState({
                    listData: [...cache, ...data.results]
                })
            })
        }
    }

    render() {
        if(this.state.listData) {
            const List = this.state.listData.map((obj, i) => {
                let reg = new Date(Date.parse(obj.registered)).toGMTString();
                return(
                    <Card reg={reg} info={obj} key={i} />
                );
            });
            return(
                <div className="List">
                    {List}
                    <Button action={this.loadMore.bind(this)}> Load More</Button>
                </div>
                
            );
        }

        return (<h1>Loading...</h1>);
    }
}