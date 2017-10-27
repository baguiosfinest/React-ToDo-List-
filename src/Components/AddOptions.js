import React, {Component} from 'react';


class AddOption extends Component{
    render(){
        return (
            <div className="wrap">
                <div className="addoptions">
                    <form onSubmit={(e)=>this.props.handleAdd(e)} className="clearfix">
                        <input type="text" name="item" onChange={(e) => this.props.handleChange(e)} value={this.props.inputvalue} />
                        <button type="submit">Add Option</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddOption;