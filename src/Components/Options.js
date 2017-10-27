import React, {Component} from 'react';

import AddOption from './AddOptions';

class Options extends Component{
    render(){
        return (
            <div className="wrap">
                <div className="options">
                    <header>
                        <div>Your Options</div>
                        <div><button 
                            className="clear"
                            onClick={(e)=> this.props.handleRemoveAll(e)}>Remove All</button></div>
                    </header>
                    <ol>
                        {
                        this.props.options.map((item, index) => {
                            return <li 
                            key={index} 
                            className={(item.active) ? "active clearfix" : "clearfix" }><span></span><p>{item.name}
                            <button index={index}
                                onClick={(e)=>this.props.handleRemoveItem(e,index)}
                                className="clear">Remove</button></p></li>;
                        })
                        }
                    </ol>

                    <AddOption inputvalue={this.props.inputvalue} handleChange={this.props.handleChange} handleAdd={this.props.handleAdd} />
                </div>
            </div>
        );
    } 
}

export default Options;