import React from 'react';
import $ from 'jquery';
import {hashHistory} from 'react-router';

export default class BookDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {book: {}};
    }
    componentDidMount() {
        $.get(`http://localhost:3000/books/${this.props.params._id}`).then((book)=> {
            this.setState({book});
        });
    }
    handleDelete() {
        $.ajax({
            url: `http://localhost:3000/books?_id=${this.state.book._id}`,
            method: 'DELETE',
        }).then((data)=> {
            //this.context.router.push('/list');
            hashHistory.push('/list');
        })
    }
    handleChange(){
        //this.context.router.push(`/change/${this.state.book._id}`);
        hashHistory.push(`/change/${this.state.book._id}`);
    }
    handleBack() {
        this.context.router.goBack();
    }
    render(){
        return (
            <div className="container">
                        <div className="panel panel-success text-center">
                            <div className="panel-heading">
                                {this.state.book.name}
                            </div>
                            <div className="panel-body" >
                                <img style={{width: '250px',height: '300px',border: '1px solid #c0becf'}} src={this.state.book.image}/>
                            </div>
                            <div className="panel-footer">
                                价格: {this.state.book.price} &nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary"  onClick={this.handleChange.bind(this)}>修改</button>
                                    <button style={{marginLift:'10px'}} onClick={this.handleDelete.bind(this)} className="btn btn-danger">删除</button>
                                <button onClick={this.handleBack.bind(this)} className="btn btn-success">返回</button>
                            </div>
                        </div>
            </div>
        )
    }
}
BookDetail.contextTypes = {
    router:React.PropTypes.object
}