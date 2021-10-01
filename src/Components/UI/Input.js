import React from "react";

const Input = (props)=>{
    return <div>
        <label className="form-label" htmlFor={props.input.id}>{props.label}</label>
        <input className="form-control" {...props.input}/>
    </div>;
}

export default Input;