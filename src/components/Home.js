import React from 'react';
import ReactDOM from 'react-dom';
require('../styles/style.css');
import $ from 'jquery';

class SliderDots extends React.Component {
    constructor(props) {
        super(props);
    }

    click(i) {
        i = i - this.props.temp;
        this.props.go(i);
    }

    render() {
        var dots = [];
        var tmp = this.props.temp === 4 ? 0 : this.props.temp;
        for (var i = 0; i < this.props.length - 1; i++) {
            dots.push(<li key={i} className={i == tmp ? "active" : ""}
                          onClick={this.click.bind(this, i)}></li>);
        }

        return (
            <ul className="focusList">
                {
                    dots
                }
            </ul>

        )
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            flag: false,
            data: [
                {src: require('../img/1.jpg')},
                {src: require('../img/2.jpg')},
                {src: require('../img/3.jpg')},
                {src: require('../img/4.jpg')},
                {src: require('../img/1.jpg')}
            ]
        }
    }

    go(n) {
        var _n = this.state.temp + n;
        var len = this.state.data.length;
        var $banner = $('.bannerInner');
        if (_n == len) {
            $banner.css({left: 0});
            _n = 1
        }
        if (_n < 0) {
            $banner.css({left: -3200});
            _n = len - 2
        }
        $banner.stop().animate({left: -800 * _n}, 500);
        this.setState({temp: _n})
    }

    out() {
        this.setState({flag: false});
        clearInterval(this.time);
        this.time = setInterval(() => {
            this.go(1)
        }, 2000)
    }

    over() {
        this.setState({flag: true});
        clearInterval(this.time);
    }

    componentDidMound() {
        this.out()
    }

    left() {
        this.go(-1)

    }

    right() {
        this.go(1)
    }

    render() {
        return (
            <div className="banner">
                <div onMouseOver={this.over.bind(this)} onMouseLeave={this.out.bind(this)}>
                    <div className="bannerInner">
                        {
                            this.state.data.map(function (item, index) {
                                return <div key={index}><img src={item.src} alt=""/></div>
                            })
                        }
                    </div>
                    {
                        this.state.flag ? <span className="left" onClick={this.left.bind(this)}> </span> : null
                    }
                    {
                        this.state.flag ? <span className="right" onClick={this.right.bind(this)}> </span> : null
                    }

                    <SliderDots temp={this.state.temp} go={this.go.bind(this)} length={this.state.data.length}/>

                </div>
            </div>
        )
    }

    componentWillUnmount(){
        clearInterval(this.time);
    }
}

