import React from 'react';
import $ from 'jquery';
import {hashHistory} from 'react-router';

export default class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {books:[]};
    }
    componentDidMount(){
        $.get('http://localhost:3000/books').then((books)=>{
            this.setState({books});
        });
    }
    show(book){
        //this.context.router.push(`/detail/${book._id}`);
        hashHistory.push(`/detail/${book._id}`);
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            {
                                this.state.books.map((book,index)=>{
                                    return (
                                        <div key={index} className="col-md-4 text-center">
                                            <div className="panel panel-success">
                                                <div className="panel-heading">
                                                    {book.name}
                                                </div>
                                                <div className="panel-body" >
                                                    <img style={{width: '250px',height: '300px',border: '1px solid #c0becf'}} src={book.image}/>
                                                </div>
                                                <div className="panel-footer">
                                                    价格: {book.price} &nbsp;&nbsp;&nbsp;
                                                    <a onClick={this.show.bind(this,book)} style={{cursor:'pointer'}}>图书详情</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        )
    }
}
