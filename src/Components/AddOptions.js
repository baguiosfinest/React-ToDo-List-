import React, {Component} from 'react';


class AddOption extends Component{
    handleClick = (e) => {
        if(e.target.value === "Add Options"){
            e.target.value = "";
        }
        //console.log(e.target.value);
    }

    handleBlur = (e) => {
        if(e.target.value === ""){
            e.target.value = "Add Options";
        }
        //console.log(e.target.value);
    }

    render(){
        return (
            <div className="wrap">
                <div className="addoptions">
                    <form onSubmit={(e)=>this.props.handleAdd(e)} className="clearfix">
                        <input type="text" name="item" 
                        value={this.props.inputvalue} 
                        onClick={(e) => this.handleClick(e)} 
                        onBlur={(e) => this.handleBlur(e)}
                        onChange={(e) => this.props.handleChange(e)}  />
                        <button type="submit">Add Option</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddOption;