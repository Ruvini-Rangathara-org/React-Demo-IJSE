import React from "react";

interface Props {
    type: string //type of input
    name: string  //id of input
    placeholder ?: string //placeholder of input ? -> optional
    label: string //label of input
    optional : boolean //optional or not

}

class Input extends React.Component<Props,any> {
  render() {
    return (
        <div className={'m-2'}>
            <label htmlFor={this.props.name} className={'block'}>{this.props.label}
                {!this.props.optional ? <span className={'text-red-600'}>*</span> : null}
            </label>
            <input type={this.props.type} id={this.props.name} placeholder={this.props.placeholder}
                   className={'block border border-green-300 outline-none focus:border-green-600 w-full p-1'}/><br/>
        </div>
    );
  }
}

export default Input;