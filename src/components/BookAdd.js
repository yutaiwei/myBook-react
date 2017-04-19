import React from 'react';
import $ from 'jquery';
import {hashHistory} from 'react-router';

export default class BookAdd extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit(event){
        event.preventDefault();
        var name = this.refs.name.value;
        var price = this.refs.price.value;
        var image = this.refs.image.value;
        var book = {name,price,image};
       $.post('http://localhost:3000/books',book).then((book)=>{
            //this.context.router.push('/list');
           hashHistory.push('/list');
        });
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">书名</label>
                                <input placeholder="填写书名" ref="name" type="text" className="form-control" id="name" name="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price" className="control-label">价格</label>
                                <input placeholder="填写价钱" ref="price"  type="text" className="form-control" id="price" name="price"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image" className="control-label">图片</label>
                                <input placeholder="填写图片网址" ref="image"  type="text" className="form-control" id="image" name="image"/>
                            </div>
                            <div className="form-group">
                                <button onClick={this.handleSubmit.bind(this)} className="btn btn-primary">添加</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

