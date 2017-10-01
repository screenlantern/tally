import React, { Component } from 'react';
import { getList } from '../../api';
import Card from '../card/Card';

import './List.scss';

export default
class List extends Component {
    constructor(props){
        super(props)

        this.state = {
            listData: null
        }
    }

    componentDidMount() {
        getList(9).then(data => {
            console.log(data);
            this.setState({
                listData: data.results
            })
        })
    }

    render() {
        if(this.state.listData) {
            const List = this.state.listData.map((obj, i) => {
                return(
                    <Card info={obj} key={i} />
                );
            });
            return(
                <div className="List">
                    {List}
                </div>
            );
        }

        return (<h1>Loading...</h1>);
    }
}