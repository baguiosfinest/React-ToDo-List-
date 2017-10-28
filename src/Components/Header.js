import React, {Component} from 'react';

class Header extends Component{

    render(){
        return (
            <header className="Header">
                <div className="wrap">
                    <h1>{this.props.title}</h1>
                    <p>Put your life in the hands of a computer.</p>
                </div>
            </header>
        );
    }

}

Header.defaultProps = {
    title: "Indecision"
};

export default Header;