import React, {Component} from 'react';


class Action extends Component{
    render(){
        return (
            <div className="action">
                <div className="wrap">
                    <button onClick={this.props.handleRandomOption}>What Should I Do?</button>
                </div>
            </div>
        );
    }
}

export default Action;