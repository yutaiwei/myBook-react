import React from 'react';
import {Link} from 'react-router';
export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">BookStore</Link>
                        </div>
                        <div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/list">书籍列表</Link></li>
                                <li><Link to="/add">添加书籍</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                    {this.props.children}
            </div>
        )
    }
}