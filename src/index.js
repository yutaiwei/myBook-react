import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute,hashHistory} from 'react-router'
import {App,Change,Home,BookDetail,BookList,BookAdd} from './components/index'
require('bootstrap/dist/css/bootstrap.css');

let router=(
    <Router history={hashHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={Home}/>
            <Route path="add" components={BookAdd}/>
            <Route path="change/:_id" components={Change}/>
            <Route path="list" components={BookList}/>
            <Route path="detail/:_id" components={BookDetail}/>
        </Route>
    </Router>
);
ReactDOM.render( router, document.getElementById('app'));