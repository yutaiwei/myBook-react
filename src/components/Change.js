import React from 'react';
import $ from 'jquery';
import {hashHistory} from 'react-router';
export default class Change extends React.Component {
    constructor(props){
        super(props);
        this.state = {book: {}};
    }
    componentDidMount() {
        $.get(`http://localhost:3000/books/${this.props.params._id}`).then((book)=> {
            this.refs.name.value=book.name;
            this.refs.price.value=book.price;
            this.refs.image.value=book.image;
        });
    }
    handleSubmit(event){
        event.preventDefault();
        var name = this.refs.name.value;
        var price = this.refs.price.value;
        var image = this.refs.image.value;
        var book = {name,price,image};
        $.ajax({
            url: `http://localhost:3000/books?_id=${this.props.params._id}`,
            method: 'PUT',
            data:book,
        }).then((data)=> {
            //this.context.router.push('/list');
            hashHistory.push('/list');
        })
    }
    handleClear(){
        this.context.router.goBack();
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">书名</label>
                                <input  ref="name" type="text" className="form-control" id="name" name="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price" className="control-label">价格</label>
                                <input ref="price"  type="text" className="form-control" id="price" name="price"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image" className="control-label">图片</label>
                                <input ref="image"  type="text" className="form-control" id="image" name="image"/>
                            </div>
                            <div className="form-group">
                                <button onClick={this.handleSubmit.bind(this)} className="btn btn-success">确认</button>
                                <button onClick={this.handleClear.bind(this)}  className="btn btn-primary">取消</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
Change.contextTypes = {
    router:React.PropTypes.object
}
